async function fetchPokemonDetails() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const pokemonList = data.results;

    let div;
    const target = document.querySelector("#pokemon-display");
    target.style.display = "grid";
    target.style.gridTemplateColumns = "repeat(4, 1fr)";
    const fragment = document.createDocumentFragment();
    pokemonList.forEach((pokeName)=>{
      div = document.createElement("div");
      div.classList.add(pokeName.name);
      div.setAttribute("id", pokeName.name)
      const charName = document.createElement("p");
      charName.classList.add(pokeName.name);
      charName.setAttribute("id", pokeName.name);
      charName.textContent = "Pokemon Name : "+ pokeName.name;

      div.append(charName);
      fragment.append(div);
    });

    target.append(fragment);

    const detailPromises = pokemonList.map(pokemon =>
        fetch(pokemon.url)
        .then(res => res.json())
        .then(pokemonDetails => {
        img = pokemonDetails.sprites.front_default;
        types = pokemonDetails.types.map((pokeType)=> pokeType.type.name);
        return {
            image : img,
            pokemonType : types
        }
        })
    );

    const pokemonDetails = await Promise.all(detailPromises);

    const pokemonDisplayDiv = document.querySelectorAll(".pokemon-display div");

    for (let i = 0; i < pokemonDetails.length && i < pokemonDisplayDiv.length; i++) {
    const pokemonDiv = pokemonDisplayDiv[i];
    const detailData = pokemonDetails[i];

    const pokemonImage = document.createElement("img");
    const pokemonType = document.createElement("p");

    pokemonImage.src = detailData.image;
    pokemonImage.alt = "Pokemon Image " + (i + 1);
    pokemonType.textContent = "Type : "+detailData.pokemonType;

    pokemonDiv.appendChild(pokemonImage);
    pokemonDiv.appendChild(pokemonType);
  }
    return pokemonDetails;
    
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
}

fetchPokemonDetails();





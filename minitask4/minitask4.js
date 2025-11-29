document.addEventListener("DOMContentLoaded", (event) => {
  const passwordInput = document.getElementById("pwd");
  const togglePassword = document.getElementById("toggle-password");
  const eyeOpen = document.getElementById("eye-open");
  const eyeClosed = document.getElementById("eye-closed");

  togglePassword.addEventListener("click", function () {
    let type;
    if (passwordInput.getAttribute("type") === "password") {
      type = "text";
    } else {
      type = "password";
    }
    passwordInput.setAttribute("type", type);

    eyeOpen.classList.toggle("hidden");
    eyeClosed.classList.toggle("hidden");
  });
});

const key = "input";

const form = document.querySelector("main > form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validation1 = document.querySelector("#validation1");
  const validation2 = document.querySelector("#validation2");
  const password = document.querySelector("#pwd");
  const username = document.querySelector("#username");

  if (username.value.length >= 1) {
    validation1.textContent = ``;
    username.focus();
  }
  if (password.value.length >= 1) {
    validation2.textContent = ``;
    password.focus();
  }
  if (username.value.trim().length === 0) {
    validation1.textContent = `Username must been filled!`;
    username.focus();
  }

  if (password.value.trim().length === 0) {
    validation2.textContent = `Password must been filled!`;
    password.focus();
    return false;
  }
  if (password.value.length < 5) {
    validation2.textContent = `Minimum password 5 character!`;
    password.focus();
  }

  let credentialInfo = username.value.length >= 1 && password.value.length >= 5;

  const userInput = {};
  const inputs = e.target.querySelectorAll("input");

  inputs.forEach((input) => {
    Object.assign(userInput, { [input.name]: input.value });
  });

  if (credentialInfo) {
    localStorage.setItem(key, JSON.stringify(userInput));
    window.location.href = "/minitask4/mitask4home.html";
    
  }
});

function checkStorage(){
  let existUser = localStorage.getItem(key)
  if(existUser !== null){
    window.location.replace("/minitask4/mitask4home.html")
  }
}

checkStorage();

const menuCheckbox = document.getElementById('menu');

menuCheckbox.addEventListener('change', function() {
    const navbar = document.querySelector('.navbar');
    if (this.checked) {
        navbar.style.maxHeight = '500px';
    } else {
        navbar.style.maxHeight = '0px';
    }
});
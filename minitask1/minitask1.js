document.addEventListener("DOMContentLoaded", (event) => {
  const passwordInput = document.getElementById("password");
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
    
    eyeClosed.classList.toggle("hidden");
    eyeOpen.classList.toggle("hidden");
    
  });
});

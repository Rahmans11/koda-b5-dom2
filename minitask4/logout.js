document.addEventListener("DOMContentLoaded", () => {
    const logout = document.querySelector("#logout");

    if (logout) {
        logout.addEventListener("click", () => {
            localStorage.clear();

            window.location.href = "/minitask4/minitask4login.html";
        });
    }
});
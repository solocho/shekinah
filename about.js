function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let menuToggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");

    // Change the menu icon between ☰ and ✖ when clicked
    menuToggle.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
}

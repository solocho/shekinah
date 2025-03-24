function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let menuToggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");

    // Change the menu icon between ☰ and ✖ when clicked
    if (menu.classList.contains("active")) {
        menuToggle.innerHTML = "✖"; // Close icon
    } else {
        menuToggle.innerHTML = "☰"; // Hamburger icon
    }
}

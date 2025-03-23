function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let isVisible = menu.classList.contains("active");

    if (isVisible) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

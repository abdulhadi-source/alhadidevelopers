const navbar = document.querySelector(".navbar");

function handleNavbar() {
    if (window.scrollY !== 0) {
        // At top → make navbar transparent
        navbar.classList.add("invisible");
    } else {
        // When scrolled down → show navbar background
        navbar.classList.remove("invisible");
    }
}

const hamburger = document.querySelector(".hamburger");
const tabs = document.querySelector(".tabs");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    tabs.classList.toggle("active");
});


// Run on scroll and page load
window.addEventListener("scroll", handleNavbar);
window.addEventListener("load", handleNavbar);

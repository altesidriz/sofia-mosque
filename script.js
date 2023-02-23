window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.getElementById("logo");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("active", window.scrollY > 0);
});
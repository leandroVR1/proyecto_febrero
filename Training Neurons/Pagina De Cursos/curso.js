const btn = document.getElementById("menu-btn");
const menu = document.getElementById("sidemenu");

btn.addEventListener("click", e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed")
})

document.getElementById("body").classList.toggle("body-expanded");
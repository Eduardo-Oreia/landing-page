const btnToggle = document.querySelector(".btn-toggle")
const btnClose = document.querySelector(".btn-close")
const menu = document.querySelector(".menu")

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle")
    btnClose.classList.toggle("btn-close-open")
    btnToggle.classList.toggle("btn-toggle-remove")
})
btnClose.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle")
    btnClose.classList.toggle("btn-close-open")
    btnToggle.classList.toggle("btn-toggle-remove")
})
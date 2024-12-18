const hamburgerBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.nav__items')

function activeMobileMenu() {
    hamburgerBtn.classList.toggle('is-active')
    menu.classList.toggle('active')
}

hamburgerBtn.addEventListener('click', activeMobileMenu)
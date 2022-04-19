
let menuIcon  = document.querySelector('.header__menu-icon')
let closeIcon = document.querySelector('.close')
let menuItems  = document.querySelector('.header__menu-items')
let overlay  = document.querySelector('.overlay')

function openMenu() {
  menuItems.classList.add('open')
  overlay.classList.add('show')
}

function closeMenu() {
  menuItems.classList.remove('open')
  overlay.classList.remove('show')
}

menuIcon.onclick = openMenu

closeIcon.onclick = closeMenu

document.onkeyup = function (e) {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

document.onmouseup = function () {
  closeMenu()
}
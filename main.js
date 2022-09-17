// toggle menu  --------------------------------------------------
let menuIcon  = document.querySelector('.header__menu-icon')
let closeIcon = document.querySelector('.close')
let menuItems = document.querySelector('.header__menu-items')
let overlay   = document.querySelector('.overlay')

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

overlay.onmouseup = function () {
  closeMenu()
}
// --------------------------------------------------------------


// add 'active class' to 'link' when user clicks ----------------
let link = document.querySelectorAll('.header__menu-items .link')
let logo = document.querySelector('.logo')

// remove 'active class' from all 'links'
function removeActive() {
  link.forEach(element => {
    element.classList.remove('active')
  })
}


// add 'active class' to 'target link' when user clicks
for (let i = 0; i < link.length; i++){
  link[i].addEventListener('click', (e) => {
    removeActive()
    link[i].classList.add('active')
    // e.target.classList.add('active')
    // console.log(e.target)
  })
}

// add 'active class' to 'home link' when user clicks on 'logo'
logo.addEventListener('click', () => {
  removeActive()
  link[0].classList.add('active')
})
// --------------------------------------------------------------


// add 'active class' to 'link' when user scrolls ---------------
// and toggle header bar on scroll ------------------------------
let sections = document.querySelectorAll('.section')

// variable to toggle header bar on scroll
let homeSection = document.querySelector('.home')
let headerBar = document.querySelector('.header')
let isScrolling

let scrollUp = document.querySelector('.scrollUp')

window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop
  sections.forEach(section => {
    if (scrollPosition >= (section.offsetTop - (section.offsetHeight * .7) ) &&
        scrollPosition < (section.offsetTop + section.offsetHeight - (section.offsetHeight * .6) )) {
      removeActive()
      let selectLink = `.header__menu-items a[href="#${section.id}"]`
      document.querySelector(selectLink).classList.add('active')
      if (section.id == 'services') {
        document.querySelector('.services__img').style.transform = 'translateX(0)'
        document.querySelectorAll('.top-services').forEach(e => {
          e.style.transform = 'translateY(0)'
        })
        document.querySelectorAll('.bottom-services').forEach(e => {
          e.style.transform = 'translateY(0)'
        })
      }
    }
  })

  // toggle header bar on scroll
  headerBar.style.transform = 'translateY(0)'
  clearTimeout(isScrolling)
  isScrolling = setTimeout(() => {
    (scrollPosition <= homeSection.offsetHeight)
      ? headerBar.style.transform = 'translateY(0)'
      : headerBar.style.transform = 'translateY(-100%)'
  }, 3000)
  window.scrollY > 1050
    ? scrollUp.style.transform = 'translateY(0)'
    : scrollUp.style.transform = 'translateY(200%)'
}
// --------------------------------------------------------------

scrollUp.onclick = () => {
  scrollTo(0, 0)
}
'use strict'

export function currentRoute() {
  const activeRoute = window.location.pathname
  const navItems = document.querySelectorAll('.nav__item')

  navItems.forEach(menu => {
    const menuLink = menu.childNodes[0]

    if (menuLink.pathname == activeRoute) {
      menuLink.classList.add('active')
    }
  })
}

import './navbar.css'

const clearMenu = (links) => {
  links.forEach((link) => {
    link.classList.remove('active')
  })
}

const manageMobileSidebar = () => {
  const button = document.querySelector('.js-sidebar-menu')
  const sidebar = document.querySelector('.js-mobile-sidebar')
  const links = sidebar.querySelectorAll('.js-navbar__link')
  if (button && sidebar) {
    button.addEventListener('click', (event) => {
      sidebar.classList.toggle('visible')
    })

    const closeButton = sidebar.querySelector('.js-close')
    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        sidebar.classList.remove('visible')
      })
    }

    Array.from(links).forEach((link) => {
      link.addEventListener('click', (event) => {
        sidebar.classList.remove('visible')
      })
    })
  }
}

export const manageNavbar = () => {
  const banner = document.querySelector('.js-hero')
  const navbarContainer = document.querySelector('.navbar-container-home.js-navbar-container')
  const links = Array.from(document.querySelectorAll('.js-navbar__link'))
  const sections = Array.from(document.querySelectorAll('.js-section'))

  window.addEventListener('scroll', (event) => {
    const position = banner.getBoundingClientRect()

    if (position.top <= -76) {
      navbarContainer.classList.remove('navbar-container--transparent')
      navbarContainer.classList.add('navbar-container--blue')
    } else if (position.top > -76) {
      navbarContainer.classList.remove('navbar-container--blue')
      navbarContainer.classList.add('navbar-container--transparent')
    }

    // GET CURRENT SECTION
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top > 0 && section.getBoundingClientRect().top <= 200) {
        // ACTIVE SECTION
        if (section.classList.contains('active')) {
        } else {
          const target = section.id
          if (target) {
            const link = document.querySelector(`.js-navbar__link[data-target=${target}]`)
            clearMenu(links)
            if (link) {
              link.classList.add('active')
            }
          }
        }
      }
    })
  })

  manageMobileSidebar()
}

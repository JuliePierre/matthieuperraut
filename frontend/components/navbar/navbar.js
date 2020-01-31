import './navbar.css'

const clearMenu = (links) => {
  links.forEach((link) => {
    link.classList.remove('active')
  })
}

export const manageNavbar = () => {
  const banner = document.querySelector('.js-hero')
  const navbarContainer = document.querySelector('.js-navbar-container')
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
          console.log('do nothing')
        } else {
          const target = section.id
          if (target) {
            console.log(target)
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
}

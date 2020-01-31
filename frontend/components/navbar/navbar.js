import './navbar.css'

export const manageNavbar = () => {
  const banner = document.querySelector('.js-hero')
  const navbarContainer = document.querySelector('.js-navbar-container')

  window.addEventListener('scroll', (event) => {
    const position = banner.getBoundingClientRect()
    console.log(position.top)
    if (position.top <= -76) {
      console.log('hola from HERE')
      navbarContainer.classList.remove('navbar-container--transparent')
      navbarContainer.classList.add('navbar-container--blue')
    } else if (position.top > -76) {
      navbarContainer.classList.remove('navbar-container--blue')
      navbarContainer.classList.add('navbar-container--transparent')
    }
  })
}

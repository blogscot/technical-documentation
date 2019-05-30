window.onload = function() {
  const labelToggle = document.querySelector('#label-toggle')
  const navBar = document.querySelector('nav#navbar')
  const mainDoc = document.querySelector('#main-doc')
  const fccWrapper = document.querySelector('#fcc_test_suite_wrapper')
  let menuOpen = true

  // hide FCC wrapper
  fccWrapper.classList.add('hideWrapper')

  labelToggle.addEventListener('click', function() {
    if (menuOpen) {
      labelToggle.classList.add('toggleMenu')
      navBar.classList.add('hideNavbar')
      mainDoc.classList.add('expandMain')
    } else {
      labelToggle.classList.remove('toggleMenu')
      navBar.classList.remove('hideNavbar')
      mainDoc.classList.remove('expandMain')
    }
    menuOpen = !menuOpen
  })
}

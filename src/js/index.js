window.onload = function() {
  const labelToggle = document.querySelector('#label-toggle')
  const navBar = document.querySelector('nav#navbar')
  const listItems = [...document.querySelectorAll('nav ul>a')]
  const fccTests = document.querySelector('#fcc_test_suite_wrapper')

  const maxSmallDeviceWidth = 500
  const width = window.innerWidth

  let menuOpen = true
  let menuItemsCanHideSideBar = false

  labelToggle.addEventListener('click', function() {
    menuOpen = menuOpen ? closeNav() : openNav()
  })

  if (width < maxSmallDeviceWidth) {
    menuItemsCanHideSideBar = true
    listItems.forEach(item =>
      item.addEventListener('click', () => {
        menuOpen = closeNav()
      })
    )
  }

  window.onresize = function() {
    const width = window.innerWidth
    if (menuItemsCanHideSideBar && width > maxSmallDeviceWidth) {
      menuItemsCanHideSideBar = false
      openNav()
      listItems.forEach(item => item.removeEventListener('click', closeNav))
    } else if (!menuItemsCanHideSideBar && width < maxSmallDeviceWidth) {
      menuItemsCanHideSideBar = true
      listItems.forEach(item => item.addEventListener('click', closeNav))
    }
  }

  function closeNav() {
    labelToggle.classList.add('toggleMenu')
    navBar.classList.add('hideNavbar')
    fccTests.classList.add('hideFCCMenu')
    return false
  }

  function openNav() {
    labelToggle.classList.remove('toggleMenu')
    navBar.classList.remove('hideNavbar')
    fccTests.classList.remove('hideFCCMenu')
    return true
  }
}

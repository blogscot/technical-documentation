window.onload = function() {
  const labelToggle = document.querySelector('#label-toggle')
  const navBar = document.querySelector('nav#navbar')
  const listItems = [...document.querySelectorAll('nav ul>a')]

  const maxSmallDeviceWidth = 500
  const width = window.innerWidth

  let menuOpen = true
  let menuItemsCanHideSideBar = false

  labelToggle.addEventListener('click', function() {
    if (menuOpen) {
      labelToggle.classList.add('toggleMenu')
      navBar.classList.add('hideNavbar')
    } else {
      labelToggle.classList.remove('toggleMenu')
      navBar.classList.remove('hideNavbar')
    }
    menuOpen = !menuOpen
  })

  if (width < maxSmallDeviceWidth) {
    menuItemsCanHideSideBar = true
    listItems.forEach(item => item.addEventListener('click', enable))
  }

  window.onresize = function() {
    const width = window.innerWidth
    if (menuItemsCanHideSideBar && width > maxSmallDeviceWidth) {
      // Force the navbar open
      labelToggle.classList.remove('toggleMenu')
      navBar.classList.remove('hideNavbar')

      menuItemsCanHideSideBar = false
      listItems.forEach(item => item.removeEventListener('click', enable))
    } else if (!menuItemsCanHideSideBar && width < maxSmallDeviceWidth) {
      menuItemsCanHideSideBar = true
      listItems.forEach(item => item.addEventListener('click', enable))
    }
  }
  function enable() {
    labelToggle.classList.add('toggleMenu')
    navBar.classList.add('hideNavbar')
    menuOpen = false
  }
}

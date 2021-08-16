const navBar = document.getElementById('nav-bar');

/**
 *
 * Hides the sidenav by removing the class `nav-bar--show` from it
 */
const hideNavBar = () => {
  navBar.classList.remove('nav-bar--show');
};

/**
 *
 * Shows the nav bar by adding the class `nav-bar-show` to it.
 * Also adds event which will listen to clicks outside nav and hides the nav
 *
 * @param showEvent | Event which calls this function
 */
const showNavBar = (showEvent) => {
  // If the nav is not visible stop propagation , so that
  // this event will not be considered as `clickOutsideNavBar` event
  if (!navBar.classList.contains('nav-bar--show')) {
    showEvent.stopPropagation();
  }

  navBar.classList.add('nav-bar--show');

  // Listens for any clicks outside nav and
  // when occurred hides the nav
  const clickOutsideNavBarListener = (e) => {
    if (!navBar.contains(e.target)) {
      hideNavBar();
      document.removeEventListener('click', clickOutsideNavBarListener);
    }
  };
  document.addEventListener('click', clickOutsideNavBarListener);
};

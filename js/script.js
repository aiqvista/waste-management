// Toggle Hamburger
const navbarNav = document.querySelector(`.navbar-nav`);
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// klick outside sidenav to exit
const hamburgerExit = document.querySelector(`#hamburger-menu`);

document.addEventListener(`click`, function (e) {
  if (!hamburgerExit.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(`active`);
  }
});

// Toggle Dropdown
const dropDown = document.querySelector(`#myDropdown`);
document.querySelector(`.dropdown`).onclick = () => {
  dropDown.classList.toggle(`show`);
};

// klick outside dropdown to exit
const dropdownExit = document.querySelector(`.dropdown`);

document.addEventListener(`click`, function (e) {
  if (!dropdownExit.contains(e.target) && !dropDown.contains(e.target)) {
    dropDown.classList.remove(`show`);
  }
});

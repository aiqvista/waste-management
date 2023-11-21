// Toggle

const navbarNav = document.querySelector(`.navbar-nav`);
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// klick outside sidenav to exit
const hamburger = document.querySelector(`#hamburger-menu`);

document.addEventListener(`click`, function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(`active`);
  }
});

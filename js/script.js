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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

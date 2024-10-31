const naviconEl = document.querySelector(".nav--icon");
const navCloseEl = document.querySelector(".nav--close");
const navList = document.querySelector(".nav--list");
const navbgoverlay = document.querySelector(".nav--bgoverlay");

const navOpen = () => {
  navList.classList.add("show");
  navbgoverlay.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden;";
};

const navClose = () => {
  navList.classList.remove("show");
  navbgoverlay.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};

naviconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
navbgoverlay.addEventListener("click", navClose);

// aos

AOS.init({
  offset: 200,
  delay:100,
  duration:400,
  easing:false,
  once: false,
  mirror:false,
  anchorPlacement:'top-bottom'
})

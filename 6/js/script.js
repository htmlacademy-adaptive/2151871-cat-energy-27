let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const slider = document.querySelector(".cat-comparison");
const curtain = slider.querySelector(".range-bar");
let sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

function handleGrabCurtain (event) {
	curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"));
  clientX = event.clientX;
	window.addEventListener("pointermove", handleMoveCurtain);
}

function handleMoveCurtain (event) {
	let deltaX = event.clientX - clientX;
	let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
	let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
	slider.style.setProperty("--curtain-place", `${curtainPlace}`);
}

function handleReleaseCurtaine (event) {
	window.removeEventListener("pointermove", handleMoveCurtain);
}

window.addEventListener("pointerup", handleReleaseCurtaine);

curtain.addEventListener("pointerdown", handleGrabCurtain);

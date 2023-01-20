const slider = document.querySelector(".cat-comparison");
const curtain = slider.querySelector(".range-bar");
let sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

function handleGrabCurtain(evt) {
  curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"));
  clientX = evt.clientX;
  window.addEventListener("pointermove", handleMoveCurtain);
}

function handleMoveCurtain(evt) {
  let deltaX = evt.clientX - clientX;
  let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty("--curtain-place", curtainPlace);
}

function handleReleaseCurtaine(evt) {
  window.removeEventListener("pointermove", handleMoveCurtain);
}

window.addEventListener("pointerup", handleReleaseCurtaine);
curtain.addEventListener("pointerdown", handleGrabCurtain);

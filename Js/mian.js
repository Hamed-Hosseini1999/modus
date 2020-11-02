// variable Places
const carouselSlider = document.querySelector(".place-container");
const carouselImg = document.querySelectorAll(".place-container .places-box");
const btnRight = document.querySelector("#rgt");
const btnLeft = document.querySelector("#lft");

// Make Slider

// counter
let counter = 0;

// get size
const size = 300;
// moveing Img
$(document).ready(function () {
  $(btnRight).click(function () {
    carouselSlider.scrollLeft += 300;
  });
  $(btnLeft).click(function () {
    carouselSlider.scrollLeft -= 300;
  });
});

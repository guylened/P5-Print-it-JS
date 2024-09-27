const imgSlide = document.getElementById("imgslide");
const pSlide = document.getElementById("pslide");
const dots = document.querySelectorAll(".dot");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    description:
      "<p>Impressions tous formats <span>en boutique et en ligne</span></p>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    description:
      "<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    description:
      "<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    description:
      "<p>Autocollants <span>avec découpe laser sur mesure</span></p>",
  },
];

let dotActive = document.querySelector(".dot-selected");
let indexCurrent = 0;
let slidesLength = slides.length - 1;

function updateDots() {
  dotActive.classList.remove("dot-selected");
  dots[indexCurrent].classList.add("dot-selected");
}

function updateSlides() {
  pSlide.innerHTML = slides[indexCurrent].description;
  imgSlide.src = slides[indexCurrent].image;
}

function prevSlide() {
  dotActive = document.querySelector(".dot-selected");
  indexCurrent--;
  if (indexCurrent < 0) {
    indexCurrent = slidesLength;
  }

  updateSlides();
  updateDots();
}

function nextSlide() {
  dotActive = document.querySelector(".dot-selected");
  indexCurrent++;
  if (indexCurrent > slidesLength) {
    indexCurrent = 0;
  }

  updateSlides();
  updateDots();
}

btnNext.addEventListener("click", nextSlide);

btnPrev.addEventListener("click", prevSlide);

//trigger sur les dots

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    dotActive = document.querySelector(".dot-selected");
    indexCurrent = [index];
    updateSlides();
    updateDots();
  });
});

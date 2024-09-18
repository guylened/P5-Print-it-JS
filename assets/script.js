const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btnPrev = document.getElementById("prev")
const btnNext = document.getElementById("next")

console.log({slides});

// initialisation du compteur / de l'index
let indexCurrent = 0;
let slidesLength = slides.length -1;

function updateSlides() {
	slideActive.classList.remove("slide-selected");
	dotActive.classList.remove("dot-selected");
	slides[indexCurrent].classList.add("slide-selected");
	dots[indexCurrent].classList.add("dot-selected");
}

// le trigger lorsqu'on veut la slide précédente
btnPrev.addEventListener("click", function() {
	const slideActive = document.querySelector(".slide-selected");		
	const dotActive = document.querySelector(".dot-selected");

	indexCurrent--;
	
	if (indexCurrent < 0) {
		indexCurrent = slidesLength;
	}
	
	updateSlides();
})


btnNext.addEventListener("click", function() {
	const slideActive = document.querySelector(".slide-selected");		
	const dotActive = document.querySelector(".dot-selected");

	indexCurrent++;
	
	if (indexCurrent > slidesLength) {
		indexCurrent = 0 ;
	}
	
	updateSlides();
})

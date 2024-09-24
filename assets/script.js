const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btnPrev = document.getElementById("prev")
const btnNext = document.getElementById("next")
const dot1 = document.getElementById("dot1")
const dot2 = document.getElementById("dot2")
const dot3 = document.getElementById("dot3")
const dot4 = document.getElementById("dot4")
let slideActive = document.querySelector(".slide-selected");		
let dotActive = document.querySelector(".dot-selected");


// initialisation du compteur de l'index
let indexCurrent = 0;
let slidesLength = slides.length -1;

function updateSlides() {
	slideActive.classList.remove("slide-selected");
	dotActive.classList.remove("dot-selected");
	slides[indexCurrent].classList.add("slide-selected");
	dots[indexCurrent].classList.add("dot-selected");
}



// trigger slide précédente
btnPrev.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");

	indexCurrent--;
	
	if (indexCurrent < 0) {
		indexCurrent = slidesLength;
	}

	updateSlides();
	
})	

// trigger slide suivante
btnNext.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");

	indexCurrent++;
	
	if (indexCurrent > slidesLength) {
		indexCurrent = 0 ;
	}
	
	updateSlides();
	
})


//trigger sur les dots
dot1.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");
	indexCurrent = [0]
	updateSlides();
})

dot2.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");
	indexCurrent = [1]
	updateSlides();
})

dot3.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");
	indexCurrent = [2]
	updateSlides();
})

dot4.addEventListener("click", function() {
	slideActive = document.querySelector(".slide-selected");		
	dotActive = document.querySelector(".dot-selected");
	indexCurrent = [3]
	updateSlides();
})
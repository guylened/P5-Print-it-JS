const buttons = document.querySelectorAll(".arrow");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {		
		const calcNextSlide = e.target.id === "next" ? 1 : -1;
		const SlideActive = document.querySelector(".slide-selected");		
		const DotActive = document.querySelector(".dot-selected");
		NewSlideIndex = calcNextSlide + [...slides].indexOf(SlideActive);
		NewDotIndex = calcNextSlide + [...dots].indexOf(DotActive);

		if(NewSlideIndex < 0) NewSlideIndex = [...slides].length - 1;
		if(NewSlideIndex >= [...slides].length) NewSlideIndex = 0
		slides[NewSlideIndex].classList.add("slide-selected");
		SlideActive.classList.remove("slide-selected");

		if(NewDotIndex < 0) NewDotIndex = [...slides].length - 1;
		if(NewDotIndex >= [...slides].length) NewDotIndex = 0
		dots[NewDotIndex].classList.add("dot-selected");
		DotActive.classList.remove("dot-selected");
		
		

		
	})


})



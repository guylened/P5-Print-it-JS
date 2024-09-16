
const arrowLft = document.getElementById("arrowlft");
arrowLft.addEventListener("click", myFunction1);

function myFunction1() {
  document.getElementById("banner").innerHTML = "Hello World";
}

const arrowRgt = document.getElementById("arrowrgt");
arrowRgt.addEventListener("click", myFunction2);

function myFunction2() {
  document.getElementById("banner").innerHTML = "Hello World";
}





const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

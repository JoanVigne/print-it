const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// EVENT SUR LES FLECHES
const arrow = document.getElementsByClassName("arrow");
const arrow_left = arrow[0];
const arrow_right = arrow[1];
arrow_left.addEventListener("click", () => console.log("ok left"));
arrow_right.addEventListener("click", () => console.log("ok right"));
// fin EVENT SUR LES FLECHES

//* creation des bullet points
const dotContainer = document.getElementsByClassName("dots")[0];
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.setAttribute("class", `dot`);
  dotContainer.appendChild(dot);
}
//* .dot_selected
const lesDots = document.getElementsByClassName("dot");
console.log("les dots: ", lesDots);
lesDots[0].classList.add("dot_selected");
/* lesDots[0].classList.remove("dot_selected"); */

const imgEnCours = document.getElementsByClassName("banner-img")[0];
console.log(imgEnCours.src);

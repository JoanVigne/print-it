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
arrow_left.addEventListener("click", () => changeImageGauche());
arrow_right.addEventListener("click", () => changeImageDroite());
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

lesDots[0].classList.add("dot_selected");
/* lesDots[0].classList.remove("dot_selected"); */

const imgEnCours = document.getElementsByClassName("banner-img")[0];
console.log(imgEnCours.nextElementSibling);

//* changer d'image

function changeImageDroite() {
  switch (imgEnCours.src) {
    case `http://localhost:8080/assets/images/slideshow/slide1.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide2.jpg`;
      lesDots[0].classList.remove("dot_selected");
      lesDots[1].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[1].tagLine;
      break;

    case `http://localhost:8080/assets/images/slideshow/slide2.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide3.jpg`;
      lesDots[1].classList.remove("dot_selected");
      lesDots[2].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[2].tagLine;
      break;
    case `http://localhost:8080/assets/images/slideshow/slide3.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide4.png`;
      lesDots[2].classList.remove("dot_selected");
      lesDots[3].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[3].tagLine;
      break;

    case `http://localhost:8080/assets/images/slideshow/slide4.png`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide1.jpg`;
      lesDots[3].classList.remove("dot_selected");
      lesDots[0].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[0].tagLine;
      break;
    default:
      console.log("error");
      break;
  }
}

function changeImageGauche() {
  switch (imgEnCours.src) {
    case `http://localhost:8080/assets/images/slideshow/slide1.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide4.png`;
      lesDots[0].classList.remove("dot_selected");
      lesDots[3].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[3].tagLine;
      break;

    case `http://localhost:8080/assets/images/slideshow/slide2.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide1.jpg`;
      lesDots[1].classList.remove("dot_selected");
      lesDots[0].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[0].tagLine;
      break;
    case `http://localhost:8080/assets/images/slideshow/slide3.jpg`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide2.jpg`;
      lesDots[2].classList.remove("dot_selected");
      lesDots[1].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[1].tagLine;
      break;

    case `http://localhost:8080/assets/images/slideshow/slide4.png`:
      imgEnCours.src = `http://localhost:8080/assets/images/slideshow/slide3.jpg`;
      lesDots[3].classList.remove("dot_selected");
      lesDots[2].classList.add("dot_selected");
      imgEnCours.nextElementSibling.innerHTML = slides[2].tagLine;
      break;
    default:
      console.log("error");
      break;
  }
}

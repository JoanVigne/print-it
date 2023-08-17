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

const imgEnCours = document.getElementsByClassName("banner-img")[0];

//*! var global, Single source of truth
let index = 0;

//* changer d'image 1ere version de function
/* function changeImageDroite() {
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
} */

//* changer d'image, 2eme version de function vu avec mentor

const imgBannerElement = document.querySelector(".banner-img");
const pBannerElement = document.querySelector("#banner p");
// changer l'image
const changeBannerElement = () => {
  imgBannerElement.src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};
// creation dots
const dotContainer = document.getElementsByClassName("dots")[0];
slides.forEach((slide, i) => {
  const dotEle = document.createElement("span");
  dotEle.classList.add("dot");
  if (i === index) {
    dotEle.classList.add("dot_selected");
  }
  // ajout du clic sur les dots pour changer d'image
  dotEle.addEventListener("click", () => {
    index = i;
    changeBannerElement();
    changeCssDotElement();
  });
  dotContainer.appendChild(dotEle);
});

// dot selected one
const changeCssDotElement = () => {
  const lesDots = document.querySelectorAll(".dot");

  lesDots.forEach((dot, i) => {
    dot.classList.remove("dot_selected");
    if (i === index) {
      dot.classList.add("dot_selected");
    }
  });
};

// event listener
arrow_right.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  changeBannerElement();
  changeCssDotElement();
});

arrow_left.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  changeBannerElement();
  changeCssDotElement();
});

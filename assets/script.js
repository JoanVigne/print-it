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
//* fin EVENT SUR LES FLECHES

/* .dots {
  position: absolute;
  bottom: 40px;
  display: flex;
}
.dot {
  margin-inline: 5px;
  width: 13px;
  height: 13px;
  background-color: #ffffff00;
  border: 3px solid #fff;
  border-radius: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.dot_selected {
  background-color: #fff;
} */

//* creation des bullet points
const dotContainer = document.getElementsByClassName("dots")[0];
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.setAttribute("class", `dot`);
  dotContainer.appendChild(dot);
  console.log("les i", i);
  console.log("le dotcontainer", dotContainer);
}

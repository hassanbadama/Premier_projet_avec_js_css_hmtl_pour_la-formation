const slides = [
    {
        "image": "fred-kleber-gTbaxaVLvsg-unsplash.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "annie-spratt-Eg1qcIitAuA-unsplash.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "aw-creative-VGs8z60yT2c-unsplash.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "emile-guillemot-Bj_rcSC5XfE-unsplash.jpg",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const image = document.querySelector(".banner-img")
const droite = document.getElementById("droite");
const teste = document.querySelector(".image_rigth")
const gauche = document.getElementById("gauche");
const dot = document.querySelector(".dots1")

const texte = document.querySelector("#banner p")



const taille = length.slides;
let tab = []
let tabtaille = Object.values(slides);
console.log(tab)

for (let i = 0; i <= slides.length - 1; i++) {
    const div = document.createElement("div")
    div.classList.add("dot")
    console.log("tete " + i)
    dot.appendChild(div)
}
const dot1 = document.querySelectorAll(".dot")
console.log("--- p " + dot1)

let compteur = 0
dot1[compteur].classList.add("dot_selected")
droite.addEventListener("click", function () {
    dot1[compteur].classList.remove("dot_selected")
    compteur++
    if (compteur == slides.length) {
        compteur = 0
    }
    image.src = "./images/hebergements/4_small/" + tabtaille[compteur].image
    texte.innerHTML = tabtaille[compteur].tagLine
    dot1[compteur].classList.add("dot_selected")
})

gauche.addEventListener("click", function () {
    console.log("cliquer gauche")
    dot1[compteur].classList.remove("dot_selected")
    compteur--
    if (compteur < 0) {
        compteur = slides.length-1
    }
    image.src = "./images/hebergements/4_small/" + tabtaille[compteur].image
    texte.innerHTML = tabtaille[compteur].tagLine
    dot1[compteur].classList.add("dot_selected")
})
function incrementation(){
    dot1[compteur].classList.remove("dot_selected")
    compteur++
    if (compteur == slides.length) {
        compteur = 0
    }
    image.src = "./images/hebergements/4_small/" + tabtaille[compteur].image
    texte.innerHTML = tabtaille[compteur].tagLine
    dot1[compteur].classList.add("dot_selected")
}
setInterval(incrementation, 1000)
   
const modal = document.querySelector(".mod")
modal.addEventListener("click", function(){
    document.querySelector("#modal").style.display = "block";
    document.querySelector("#modal").classList.add("add");
    document.querySelector(".modal1").classList.add("add1");
    console.log("c'est bon bro");
})
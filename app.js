
// exercice 1 :
let button = document.querySelector("#button");

var test = 200;

button.addEventListener("click", function () {

    if (test === 200) {
        button.style.width = "150px";
        test = 100;
    } else if (test === 100) {
        button.style.width = "100px";
        test = 200;
    }
})

// exercice 2 : 

let hauteur = document.querySelector("#hauteur");

var h = 100;

let rectangle = document.querySelector("#rectangle");

let vert = document.querySelector("#vert");

let initial = document.querySelector("#initial");

let disparaitre = document.querySelector("#disparaitre");

let respawn = document.querySelector("#respawn");

hauteur.addEventListener("click", function () {

    if (document.querySelector("#rectangle").style.height != "300px" ){
        h += 10;
        document.querySelector("#rectangle").style.height = h+"px";
        console.log(h)
    }
    else {
    document.querySelector("#rectangle").style.height = "100px";
    h = 100;
}
})

vert.addEventListener("click", function (){

    rectangle.style.backgroundColor = "green";
})

initial.addEventListener("click", function(){
    rectangle.style.backgroundColor = "blue";
})

disparaitre.addEventListener("click", function(){
    rectangle.parentNode.removeChild(rectangle);
})

respawn.addEventListener("click", function(){
    rectangle = document.createElement("div");
    document.getElementById("parent-ex2").appendChild(rectangle);
    rectangle.setAttribute("id","rectangle");

})

// Exerice 3 : 
document.addEventListener("keyup", function(event) {
    
    event.preventDefault();
    if (event.keyCode === 38) {
        rectangle.classList = "haut";
        setTimeout(function(){
        rectangle.classList = "retour";
    }, 3000);
    }
    
});

// Exercice 4 :

let rectangle2 = document.querySelector("#rectangle2")

setInterval(function(){
        rectangle2.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
},40)

// exercice 5 :

let cubeA = document.querySelector("#A").value = 1;
let cubeB = document.querySelector("#B").value = 2;
let cubeC = document.querySelector("#C").value = 3;
let cubeD = document.querySelector("#D").value = 4;

function cubeRouge() {
    let valeurRandom = Math.floor(Math.random() * 5) + 1;
    if (valeurRandom == 1){
        document.querySelector("#A").style.background = "red";
        document.querySelector("#B").style.background = "blue";
        document.querySelector("#C").style.background = "blue";
        document.querySelector("#D").style.background = "blue";
    }
    if (valeurRandom == 2){
        document.querySelector("#A").style.background = "blue";
        document.querySelector("#B").style.background = "red";
        document.querySelector("#C").style.background = "blue";
        document.querySelector("#D").style.background = "blue";
        
    }
    if (valeurRandom == 3){
        document.querySelector("#A").style.background = "blue";
        document.querySelector("#B").style.background = "blue";
        document.querySelector("#C").style.background = "red";
        document.querySelector("#D").style.background = "blue";
    }
    if (valeurRandom == 4){
        document.querySelector("#A").style.background = "blue";
        document.querySelector("#B").style.background = "blue";
        document.querySelector("#C").style.background = "blue";
        document.querySelector("#D").style.background = "red"; 
    }

document.querySelector("#A").addEventListener("click", function(){
    if (document.querySelector("#A").style.background == "red"){
        window.alert("GG !")
    }
})

document.querySelector("#B").addEventListener("click", function(){
    if (document.querySelector("#B").style.background == "red"){
        window.alert("GG !")
    }
})

document.querySelector("#C").addEventListener("click", function(){
    if (document.querySelector("#C").style.background == "red"){
        window.alert("GG !")
    }
})

document.querySelector("#D").addEventListener("click", function(){
    if (document.querySelector("#D").style.background == "red"){
        window.alert("GG !")
    }
})


setInterval(function(){
    cubeRouge();
},40)}

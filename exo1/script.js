"use strict";

// Les chaines et les nombres sont des types primitifs (slide 38).
// const permet de declarer les constantes (slide 52).
const nom = "John";
const prenom = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// Declaration de fonctions (slide 46).
function f1() {
  console.log(nom);
}

function f2() {
  console.log(prenom);
}

function f3() {
  // affichage elabore (slide 38).
  console.log(nom + "-" + prenom);
}

function f4() {
  console.log(age);
}

function f5() {
  console.log(note);
}

function f6() {
  console.log(pi);
}

// getElementById() selectionne un element par son identifiant, comme dans l'exemple du compteur (slide 21).
// onclick associe la fonction a l'evenement de clic (slides 19 ).
document.getElementById("nom").onclick = f1;
document.getElementById("prenom").onclick = f2;
document.getElementById("nom-prenom").onclick = f3;
document.getElementById("age").onclick = f4;
document.getElementById("note").onclick = f5;
document.getElementById("pi").onclick = f6;

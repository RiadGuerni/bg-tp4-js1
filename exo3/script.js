"use strict";

// Les moyennes sont des nombres decimaux (slide 38).
const Students = [
  { id: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14.5 },
  { id: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7.1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13.3 },
];

// A appele B pour obtenir la decision de chaque etudiant (slide 46).
function A() {
  for (const etudiant of Students) {
    // La condition choisis le libelle a partir du boolen renvoye par B (slide 43).
    let decision;
    if (B(etudiant.moyenne)) {
      decision = "ADMIS";
    } else {
      decision = "AJOURNÉ";
    }

    console.log(etudiant.id + ": " + decision);
  }
}

// B recois un nombre et renvoie le booleen issu de la comparaison ( 42 ).
function B(moyenne) {
  return moyenne >= 10;
}

document.getElementById("deliberation").onclick = A;

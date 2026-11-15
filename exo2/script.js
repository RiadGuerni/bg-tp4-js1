"use strict";

function f1() {
  // Le tableau regroupe les trois nom (slide 39).
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  // La boucle forparcourt les valeurs du tableau (slide 45).
  for (const etudiant of etudiants) {
    console.log(etudiant);
  }
}

function f2() {
  // Un objet regroupe les proprietes dun etudiant (slide 40).
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}

function f3() {
  // Chaque element de ce tableau est un objet etudiant (slide 41).
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 },
  ];

  for (const etudiant of etudiants) {
    console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
  }
}

document.getElementById("tableau-etudiants").onclick = f1;
document.getElementById("objet-etudiant").onclick = f2;
document.getElementById("tableau-objets-etudiants").onclick = f3;

/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet & Reubi
 * @version 0.3
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let a = 'Bonjour';

console.log(a);

// entrée du nombre en celcius par l'utilisateur
let tempC = prompt("Température en celcius :");

// testes si la valeur entrée est un nombre
if(isNaN(tempC)) {
    alert("Température Invalide !")
} else {
    // calcule et affiche la température en fahrenheit
    let tempF = tempC * 9 / 5  + 32;
    alert(`${tempC}°C = ${tempF}°F`);
}

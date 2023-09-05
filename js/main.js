/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet & Reubi
 * @version 0.3
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let btConvertir = document.querySelector("#convert");
let txtInput = document.querySelector("#input");
let btReset = document.querySelector("#reset");
let pInput = document.querySelector("#result");
let ulHistorique = document.querySelector("#history");

btConvertir.addEventListener("click",() => {
    let tempC = parseFloat(txtInput.value);
    if(isNaN(tempC)) {
        alert("Température Invalide !")
    } else {
        // calcule et affiche la température en fahrenheit
        let tempF = tempC * 9 / 5  + 32;
        pInput.innerText = `Résultat : ${tempF}°F`;
        ulHistorique.innerHTML += `<li> ${tempC}°C = ${tempF}°F`;
    }
});

btReset.addEventListener("click",() => {
    pInput.innerText = "Résultat : ";
    ulHistorique.innerHTML = "";
});


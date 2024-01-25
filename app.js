let titulo = document.querySelector ("h1");
titulo.innerHTML = "Hora del desafío";



function consola () {
    alert("El botón fue clicado");
}

function amoJS () {
    alert("Yo amo JS");
}

function ciudadBrasil () {
    let ciudad = prompt("Dime el nombre de una ciudad de Brasil");
    alert (`Estuve en ${ciudad} y me acordé de ti`)
}

function suma () {
    let primerNumero = parseInt(prompt("Dime un número"));
    let segundoNumero = parseInt(prompt("Ahora dime otro número"));
    alert(`La suma de ${primerNumero} + ${segundoNumero} es: ${primerNumero + segundoNumero}`)
}
//Se declaran las Variables al inicio
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
        alert("El número secreto es mayor");
        }
        //incrementamos el contador cuano no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        
        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
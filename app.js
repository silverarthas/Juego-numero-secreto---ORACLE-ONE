let numerosEntregados = [];
let numerosAleat = [];
let numeroSecreto = aleatorio();
let intentos = 1;
let numeroUsuario = 0;

function aleatorio() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    if (numerosAleat.includes(numeroGenerado)) {
        return aleatorio();
        }
        else{
            numerosAleat.push(numeroGenerado);
            return numeroGenerado
        }
}

function asignarTextoEtiqueta(etiqueta, texto) {
    let etiquetahtml = document.querySelector(etiqueta);
    etiquetahtml.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = "";
}

function mensajesInicio() {
    asignarTextoEtiqueta("h1", "Super Juego del número secreto");
    asignarTextoEtiqueta(".texto__parrafo", "Adivina un número del 1 al 100");
}

mensajesInicio();

function capturaNumeroUsuario() {
    numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log("Número ingresado:", numeroUsuario);
    console.log("Número secreto:", numeroSecreto);
    console.log("Coinciden:", numeroSecreto === numeroUsuario);
    console.log("Intentos:", intentos);
    console.log(numerosAleat);
}

function comparar() {
    // Validar si el número ya fue intentado
    if (numerosEntregados.includes(numeroUsuario)) {
        alert("Ya utilizaste ese número. Intenta con uno diferente.");
        return;
    }

    // Guardar el número y mostrar la lista completa
    numerosEntregados.push(numeroUsuario);
    console.log("Números usados hasta ahora:", numerosEntregados);

    // Comparar el número con el número secreto
    if (numeroSecreto === numeroUsuario) {
        asignarTextoEtiqueta(".texto__parrafo", `¡Acertaste en ${intentos} ${(intentos === 1 ? "intento" : "intentos")}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        let mensaje = numeroSecreto > numeroUsuario
            ? "El número secreto es mayor, vuelve a intentar."
            : "El número secreto es menor, vuelve a intentar.";
        asignarTextoEtiqueta(".texto__parrafo", mensaje);
        alert(`Intento número: ${intentos}`);
        limpiarCaja();
        intentos++;
    }
}

function reiniciarJuego() {
    limpiarCaja();
    intentos = 1;
    numerosEntregados = [];
    numeroSecreto = aleatorio();
    mensajesInicio();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

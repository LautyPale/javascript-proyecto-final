function obtenerTipoDeCambio(monedaOrigen, monedaDestino) { // pido la monedaOrigen y la monedaDestino
    const tipoDeCambio = { // Realizo un objeto con los tipos de cambio y su propio valor (1) para evitar errores al pedirle la monedaOrigen o monedaDestino
        "EUR": { 
            "USD": 1.08,
            "BRL": 5.41,
            "ARS": 907.56,
            "EUR": 1
        },
        "USD": {
            "EUR": 0.92,
            "BRL": 5.00,
            "ARS": 837.50,
            "USD": 1
        },
        "BRL": {
            "EUR": 0.18,
            "USD": 0.20,
            "ARS": 167.98,
            "BRL": 1
        },
        "ARS": {
            "EUR": 0.0011,
            "USD": 0.0012,
            "BRL": 0.0060,
            "ARS": 1
        },
    }

    //return tipoDeCambio [monedaOrigen][monedaDestino] // retorno el valor de la moneda que elija el usuario
}

function convertirMoneda(cantMoneda, monedaOrigen, monedaDestino) {
    const tipoDeCambio = obtenerTipoDeCambio(monedaOrigen, monedaDestino)
    return cantMoneda * tipoDeCambio
}

function mostrarResultado(cantMoneda, monedaOrigen, monedaDestino, resultado) { 
    // cantMoneda = cantidad a convertir
    // monedaOrigen = moneda que elija el usuario
    // monedaDestino = moneda que elija el usuario
    // resultado = utilizo la funcion convertirMoneda
    alert(`La cantidad de ${cantMoneda} ${monedaOrigen} equivalen a ${resultado.toFixed(2)} ${monedaDestino}`) // .toFixed es para redondear el resultado
}

// Inicializo las variables

let monedaOrigen;
let monedaDestino;
let cantidad;

do { // pido la moneda que quiere convertir el usuario
    monedaOrigen = prompt("Ingrese la moneda de origen (EUR, USD, BRL, ARS):").toUpperCase();
    if (!["EUR", "USD", "BRL", "ARS"].includes(monedaOrigen)) { // .includes es para saber si monedaOrigen tiene el elemento (EUR, USD, BRL, ARS) y confirmar que no sea falso
        alert("La moneda que desea convertir no es válida. Por favor, ingrese una moneda válida (EUR, USD, BRL, ARS).")
    }
} while (!["EUR", "USD", "BRL", "ARS"].includes(monedaOrigen));

do { // pido la moneda a la que quiere convertir el usuario
    monedaDestino = prompt("Ingrese la moneda de destino (EUR, USD, BRL, ARS):").toUpperCase();
    if (!["EUR", "USD", "BRL", "ARS"].includes(monedaDestino)) {
        alert("La moneda que desea convertir no es válida. Por favor, ingrese una moneda válida (EUR, USD, BRL, ARS).")
    }
} while (!["EUR", "USD", "BRL", "ARS"].includes(monedaDestino));

cantidad = parseFloat(prompt("Ingresa la cantidad que deseas convertir")) // parseFloat para convertir a entero

const resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino)

mostrarResultado(cantidad, monedaOrigen, monedaDestino, resultado)
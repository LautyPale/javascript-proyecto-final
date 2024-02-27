// Defino constantes

const VALOR_USD = 1
const VALOR_EUR = 1.08 * VALOR_USD
const VALOR_BRL = 0.2 * VALOR_USD
const VALOR_ARS = 0.0009 * VALOR_USD
const historial = [];

// Objeto con los tipos de cambio

tipoDeCambio = {
    "USD": VALOR_USD,
    "EUR": VALOR_EUR,
    "BRL": VALOR_BRL,
    "ARS": VALOR_ARS
}

// Funcion para convertir divisas

function convertirMoneda(monedaElegida, monedaAConvertir, cantidadMonedaElegida, guardarHistorial) {
  
    const tipoCambioOrigen = tipoDeCambio[monedaElegida];
    const tipoCambioDestino = tipoDeCambio[monedaAConvertir];
  
    const cantidadConvertida = (cantidadMonedaElegida * tipoCambioOrigen) / tipoCambioDestino;

    guardarHistorial(monedaElegida, monedaAConvertir, cantidadMonedaElegida, cantidadConvertida.toFixed(2), );

    return cantidadConvertida.toFixed(2);
}

// Funcion para guardar historial

function guardarHistorial(monedaElegida, monedaAConvertir, cantidad, resultado) {

    const historialConversion = {
        monedaElegida: monedaElegida,
        monedaAConvertir: monedaAConvertir,
        cantidadMonedaElegida: cantidad,
        resultado: resultado
    }

    historial.push(historialConversion);
}

// Defino variables

let menu
let monedaElegida
let monedaAConvertir
let cantidad
let resultado

// Menu

while (menu !== '0') {

    let mensaje = `Ultimas conversiones: \n`

    menu = prompt("Bienvenido al conversor de divisas. ¿Que deseas hacer? \n" +
        "1. Convertir divisas \n" +
        "2. Ver historial \n" +
        "0. Salir")
    
    if (menu === '1') {

        do {
            monedaElegida = prompt("Ingrese la moneda que desea convertir (EUR, USD, BRL, ARS):").toUpperCase();
            if (!["EUR", "USD", "BRL", "ARS"].includes(monedaElegida)) { // .includes es para saber si moneda tiene el elemento (EUR, USD, BRL, ARS) y confirmar que no sea falso
                alert("La moneda que desea convertir no es válida. Por favor, ingrese una moneda válida (EUR, USD, BRL, ARS).")
            }
        } while (!["EUR", "USD", "BRL", "ARS"].includes(monedaElegida));

        do {
            monedaAConvertir = prompt("Ingrese la moneda a la que desea convertir (EUR, USD, BRL, ARS):").toUpperCase();
            if (!["EUR", "USD", "BRL", "ARS"].includes(monedaAConvertir)) {
                alert("La moneda que desea convertir no es válida. Por favor, ingrese una moneda válida (EUR, USD, BRL, ARS).")
            }
        } while (!["EUR", "USD", "BRL", "ARS"].includes(monedaAConvertir));

cantidad = parseFloat(prompt("Ingresa la cantidad que deseas convertir")) // parseFloat para convertir a entero

const resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino)

mostrarResultado(cantidad, monedaOrigen, monedaDestino, resultado)
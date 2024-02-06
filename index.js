// Precios de Western Union

const dolarAPeso = 1250
const euroAPeso = 1300
const realAPeso = 250
const pesoADolar = 0.0008
const pesoAEuro = 0.0007
const pesoAReal = 0.0038

let monedaSeleccionada = prompt("Ingresa a la moneda que desea convertir \n 1- Dolares a pesos \n 2- Pesos a dolares \n 3- Euros a pesos \n 4- Pesos a euros \n 5- Reales a pesos \n 6- Pesos a reales \n ESC - Salir")

let cantidad = 0
let total = 0

let functionConvert = (monedaSeleccionada, cantMoneda) => monedaSeleccionada * cantMoneda

while (monedaSeleccionada != 'ESC') {

    switch (monedaSeleccionada) {
        case '1':
            cantidad = parseFloat( prompt("Ingresa la cantidad de dolares que deseas convertir a pesos") )
            total = parseFloat( functionConvert (dolarAPeso, cantidad) ).toFixed(2)
            break
        case '2':
            cantidad = parseFloat( prompt("Ingresa la cantidad de pesos que deseas convertir a dolares") )
            total = parseFloat ( functionConvert (pesoADolar, cantidad) ).toFixed(4)
            break
        case '3':
            cantidad = parseFloat( prompt("Ingresa la cantidad de euros que deseas convertir a pesos") )
            total = parseFloat( functionConvert (euroAPeso, cantidad) ).toFixed(2)
            break
        case '4':
            cantidad = parseFloat( prompt("Ingresa la cantidad de pesos que deseas convertir a euros") )
            total = parseFloat ( functionConvert (pesoAEuro, cantidad) ).toFixed(4)
            break
        case '5':
            cantidad = parseFloat( prompt("Ingresa la cantidad de reales que deseas convertir a pesos") )
            total = parseFloat ( functionConvert (realAPeso, cantidad) ).toFixed(2)
            break
        case '6':
            cantidad = parseFloat( prompt("Ingresa la cantidad de pesos que deseas convertir a reales") )
            total = parseFloat ( functionConvert (pesoAReal, cantidad) ).toFixed(4)
            break
        case 'ESC':
            break
        default:
            alert("Ingreso un valor no valido")
            break
    }

    if (total != 0) {
        alert("El total convertido es: " + total)
    }

    total = 0

    monedaSeleccionada = prompt("Ingresa a la moneda que desea convertir \n 1- Dolares a pesos \n 2- Pesos a dolares \n 3- Euros a pesos \n 4- Pesos a euros \n 5- Reales a pesos \n 6- Pesos a reales \n ESC - Salir")

}

















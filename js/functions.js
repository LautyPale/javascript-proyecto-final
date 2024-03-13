// functions.js

// Funcion para convertir divisas

function convertirMoneda(monedaElegida, monedaAConvertir, cantidadMonedaElegida, guardarHistorial) {
  
    const tipoCambioOrigen = tipoDeCambio[monedaElegida]
    const tipoCambioDestino = tipoDeCambio[monedaAConvertir]
  
    const cantidadConvertida = (cantidadMonedaElegida * tipoCambioOrigen) / tipoCambioDestino

    guardarHistorial(monedaElegida, monedaAConvertir, cantidadMonedaElegida, cantidadConvertida.toFixed(2), )

    return cantidadConvertida.toFixed(2)
}

// Funcion para obtener historial desde localstorage

function obtenerHistorial() {
    const historialGuardado = localStorage.getItem('historial')
    return historialGuardado ? JSON.parse(historialGuardado) : [] // Si no hay historial devuelvo un array vacio
}

// Funcion para guardar historial

function guardarHistorial(monedaElegida, monedaAConvertir, cantidad, resultado) {

    const historialGuardado = obtenerHistorial()

    if (historialGuardado.length >= 5) {
        
        historialGuardado.shift(); // elimino el resultado mas antiguo
    }

    const historialConversion = {
        monedaElegida: monedaElegida,
        monedaAConvertir: monedaAConvertir,
        cantidadMonedaElegida: cantidad,
        resultado: resultado
    }

    historialGuardado.push(historialConversion)
    localStorage.setItem('historial', JSON.stringify(historialGuardado))
}
// functions.js

// Funcion para convertir divisas

function currencyConverter(selectedCurrency, currencyToConvert, amountOfCurrency, savedHistory) {
  
    const exchangeRateOrigin = exchangeType[selectedCurrency]
    const exchangeRateDestiny = exchangeType[currencyToConvert]
  
    const quantityConverted = (amountOfCurrency * exchangeRateOrigin) / exchangeRateDestiny

    savedHistory(selectedCurrency, currencyToConvert, amountOfCurrency, quantityConverted.toFixed(2), )

    return quantityConverted.toFixed(2)
}

// Funcion para obtener historial desde localstorage

function getHistory() {
    const savedHistory = localStorage.getItem('history')
    return savedHistory ? JSON.parse(savedHistory) : [] // Si no hay historial devuelvo un array vacio
}

// Funcion para guardar historial

function savedHistory(selectedCurrency, currencyToConvert, quantity, result) {

    const savedHistory = getHistory()

    if (savedHistory.length >= 5) {
        
        savedHistory.shift(); // elimino el resultado mas antiguo
    }

    const historyConversion = {
        selectedCurrency: selectedCurrency,
        currencyToConvert: currencyToConvert,
        amountOfCurrency: quantity,
        result: result
    }

    savedHistory.push(historyConversion)
    localStorage.setItem('history', JSON.stringify(savedHistory))

}

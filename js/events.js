// events.js

// Constantes y variables

const convertButton = document.querySelector('#convert-button')
const historyButton = document.querySelector('#history-button')

let amount = document.querySelector('#amount')
let oldCurrency = document.querySelector('#old-currency')
let newCurrency = document.querySelector('#new-currency')
let result = document.querySelector('#result')
let history = [];

// Validacion de input

amount.addEventListener('input', () => {

    let numericValue = parseFloat(amount.value.replace(',', '.'));

    if (numericValue > 999999999.99) {
        amount.value = '999999999.99'
    }

})

// Boton convertir

convertButton.addEventListener('click', (event) => {
    
    event.preventDefault()
    amount = document.querySelector('#amount')
    oldCurrency = document.querySelector('#old-currency')
    newCurrency = document.querySelector('#new-currency')
    result = document.querySelector('#result')

    if (isNaN(parseFloat(amount.value)) || parseFloat(amount.value) <= 0) {
        Swal.fire({
            text: "Por favor, ingrese un importe válido.",
            icon: "info"
        })
    } else {
        let resultOfConversion = currencyConverter (oldCurrency.value, newCurrency.value, parseFloat(amount.value), savedHistory)
        result.value = resultOfConversion
        
        history = getHistory()
    }

})

// boton history

historyButton.addEventListener('click', (event) => {
    
    event.preventDefault()
    history = getHistory()
    history.reverse()
    const container = document.querySelector('#container')
    let historyDiv = document.querySelector('#history-div')

    if (historyDiv) {

        historyDiv.remove()

    } else {

        historyDiv = document.createElement('div')
        historyDiv.setAttribute('id', 'history-div')

        if (localStorage.getItem('history') == '[]') {

            Swal.fire({
                text: "No hay history de conversiones.",
                icon: "info"
            })

        } else {
    
            const newH2 = document.createElement('h2')
            newH2.innerHTML = `<h2 class="text-3xl text-white text-center mb-2">Historial</h2>`
            historyDiv.appendChild(newH2)

            history.forEach((element) => {
                const newH3 = document.createElement('h3')
                newH3.innerHTML = `<h3 class="text-white">${element.selectedCurrency} ${element.amountOfCurrency} = ${element.currencyToConvert} ${element.result}</h3>`
        
                historyDiv.appendChild(newH3)
            })

            container.appendChild(historyDiv)

        }

    }

})
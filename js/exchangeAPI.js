// exchangeAPI.js

// Constantes - actualizado ultima vez: 26/3/2024

const VALUE_USD = 1 // USD es la moneda de referencia
const VALUE_EUR = 1.08028713 
const VALUE_BRL = 0.19991552
const VALUE_ARS = 0.0011693888 
const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'

// Objeto

const exchangeType = { 
    USD: VALUE_USD, 
    EUR: VALUE_EUR,
    BRL: VALUE_BRL,
    ARS: VALUE_ARS
}

// Async y await

async function getChanges(exchangeType) {

    try {

        for (const currency in exchangeType) {
            const response = await fetch(URL + `${currency.toLowerCase()}.json`)
            const data = await response.json()
            exchangeType[currency] = data[currency.toLowerCase()].usd
        }

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se han podido cargar las cotizaciones de monedas se utilizaran los valores por defecto.', 
        })

    }

}

getChanges(exchangeType)



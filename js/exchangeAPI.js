// exchangeAPI.js

// Constantes y variables

const VALUE_USD = 1 // USD es la moneda de referencia
let VALUE_EUR = ''
let VALUE_BRL = ''
let VALUE_ARS = ''

const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'
const EUR_JSON = 'eur.json'
const BRL_JSON = 'brl.json'
const ARS_JSON = 'ars.json'

// Objeto

const tipoDeCambio = {
    USD: VALUE_USD,
    EUR: VALUE_EUR,
    BRL: VALUE_BRL,
    ARS: VALUE_ARS
}

// Async y await

const getChanges = async () => {
    
    try {
        
        const responseEUR = await fetch (URL + EUR_JSON)
        const dataEUR = await responseEUR.json()
            tipoDeCambio.EUR = dataEUR.eur.usd

        const responseBRL = await fetch (URL + BRL_JSON)
        const dataBRL = await responseBRL.json()
            tipoDeCambio.BRL = dataBRL.brl.usd

        const responseARS = await fetch (URL + ARS_JSON)
        const dataARS = await responseARS.json()
            tipoDeCambio.ARS = dataARS.ars.usd

    } catch (error) {
        console.log(error)
    }

}

getChanges()

console.log(tipoDeCambio)
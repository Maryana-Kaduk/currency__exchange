const selectToCurrency = document.querySelector('#toCurrency');
const toCurrencyOptions = document.querySelectorAll('#toCurrency option');

const selectFromCurrency = document.querySelector('#fromCurrency');
const fromCurrencyOptions = document.querySelectorAll('#fromCurrency option');

const quantity = document.querySelector('#amount');
const button = document.querySelector('button');
const answer = document.querySelector('.answer');
const currencyNameShown = document.querySelector('.currency__name');

const hryvniaEuro = 0.0251;
const hryvniaDollar = 0.0271;
const hryvniaZloty = 0.1120;

const euroHryvnia = 39.9034;
const euroDollar = 1.0808;
const euroZloty = 4.4666;

const dollarHryvnia = 36.9208;
const dollarEuro = 0.9252;
const dollarZloty = 4.1329;

const zlotyHryvnia = 8.9286;
const zlotyEuro = 0.2239;
const zlotyDollar = 0.2420;



function getExchangeRate(fromCurrency, toCurrency) {
    let exchange = 1;

    if(fromCurrency === 'hryvnia') {
        if(toCurrency === 'euro') {
            exchange = hryvniaEuro;
        } else if(toCurrency === 'dollar'){
            exchange = hryvniaDollar;
        } else if(toCurrency === 'zloty') {
            exchange = hryvniaZloty;
        } 
    } else if(fromCurrency === 'euro') {
        if(toCurrency === 'hryvnia') {
            exchange = euroHryvnia;
        } else if(toCurrency === 'dollar'){
            exchange = euroDollar;
        } else if(toCurrency === 'zloty') {
            exchange = euroZloty;
        } 
    } else if(fromCurrency === 'dollar') {
        if(toCurrency === 'euro') {
            exchange = dollarEuro;
        } else if(toCurrency === 'hryvnia'){
            exchange = dollarHryvnia;
        } else if(toCurrency === 'zloty') {
            exchange = dollarZloty;
        } 
    } else if(fromCurrency === 'zloty') {
        if(toCurrency === 'euro') {
            exchange = zlotyEuro;
        } else if(toCurrency === 'hryvnia'){
            exchange = zlotyHryvnia;
        } else if(toCurrency === 'dollar') {
            exchange = zlotyDollar;
        } 
    }

    return exchange;
};

function convert(amount, fromMoney, toMoney, currencyName) {
    if(isNaN(parseFloat(amount.value)) === false) {
        answer.textContent = `${(getExchangeRate(fromMoney, toMoney) * parseFloat(amount.value)).toFixed(4)} ${currencyName}`;
    } else {
        answer.textContent = `Введіть число.`;
        amount.value = '';
    };
};

selectFromCurrency.addEventListener('change', function() {
    let fromIndex = selectFromCurrency.selectedIndex;
    currencyNameShown.textContent = fromCurrencyOptions[fromIndex].text
})

button.addEventListener('click', function() {
    let toIndex = selectToCurrency.selectedIndex;
    let fromIndex = selectFromCurrency.selectedIndex;
    convert(quantity, fromCurrencyOptions[fromIndex].value, toCurrencyOptions[toIndex].value, toCurrencyOptions[toIndex].text);
});
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description")

amount.addEventListener("input", (event) => {
        
    const hasCharacterRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacterRegex, "");
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break

    }

}


function convertCurrency(price ,amount, symbol) {
    try{
        description.textContent = `${symbol} 1 = ${amount}`
        footer.classList.add("show-result");


    } catch (erro){
        footer.classList.remove("show-result");
        alert("Não foi possível converter");
    }
}
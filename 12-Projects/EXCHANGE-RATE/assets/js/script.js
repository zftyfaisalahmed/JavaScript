const currency_one = document.getElementById("currency-one");
const amount_one = document.getElementById("amount-one");

const currency_two = document.getElementById("currency-two");
const amount_two = document.getElementById("amount-two");

const swapBtn = document.getElementById("swap");
const result = document.getElementById("rate");

function calcutale(){
    let currency_one_value = currency_one.value;
    let currency_two_value = currency_two.value;

    fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);

        const rate = data.rates[currency_one_value] / data.rates[currency_two_value];

        result.innerHTML = `1${currency_one_value} = ${rate} ${currency_two_value}`
        amount_two.value = (amount_one.value * rate).toFixed(2)
    })
    .catch((error) => {
        console.log(error.message);
    });
}
// calcutale()
currency_one.addEventListener("change", calcutale);
amount_one.addEventListener("input", calcutale);
currency_two.addEventListener("change", calcutale);
amount_two.addEventListener("input", calcutale);

swapBtn.addEventListener("click", () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calcutale();
});
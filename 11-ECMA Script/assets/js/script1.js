let details = [{
    name: "India",
    states: ["Mysore", "TamilNadu", "Kerala", "Bangalore", "Chennai"]
},
{
    name: "United Kingdom",
    states: ["California", "Texas", "Alaska", "London", "Florida"]
},
{
    name: "England",
    states: ["Liverpool", "North West", "East of England", "Bath", "Belfast"]
},
{
    name: "Germany",
    states: ["Bavaria", "Hessen", "Saxony", "Lower", "Westphalia"]
},
{
    name: "Russia",
    states: ["Moscow", "Altai", "Amur", "Chelyabinsk", "Chechen"]
},
{
    name: "Brazil",
    states: ["Parana", "Ceara", "Sao Paulo", "Santa", "Sao"]
}];

document.getElementById('countries').addEventListener('change', show);
var state = document.getElementById('States');

var countries = document.getElementById("countries");
for (let j = 0; j < details.length; j++) {
    countries.innerHTML +=  `<option value=${j}> ${details[j].name} </option>`;
}

function show(){
    let countryValue = document.getElementById('countries').value;
    state.innerHTML = " ";
    for (let index = 0; index < 5; index++) {
       state.innerHTML += `<option>${details[countryValue].states[index]}</option>`
        
    }
}
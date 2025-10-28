// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// Bonus:
// Applicare dei controlli sull'input dell'utente


// Per ottenere numeri da 1 a 10
//const randomNumber = Math.floor(Math.random() * 10) + 1;






// DATUM:
//userKm = user input prompt km (parseInt)
//userAge = user input prompt age (parseInt)

//ticketRegPrice == userKm * 0.21

//ticket20 = (ticketRegPrice * 20) / 100
//ticket40 = (ticketRegPrice * 40) / 100

//LOGIC EXECUTION:

//if        userAge < 18
//    {ticket20}
//else if   userAge > 65
//    {ticket%40}
//else
//    {ticketRegPrice}


//***RUN PROGRAM***//

let userKmStr = "";
let userAgeStr = "";
let userKm = 0;
let userAge = 0;


//First promt
userKmStr = prompt("Insert the number of killometers you wanat to travel");
//prompt controls
if (userKmStr === null || userKmStr.trim() === "") {
    alert("Please enter numbers only (no letters or symbols).");
}
userKm = parseInt(userKmStr);

//km range controls
if (isNaN(userKm) || userKm < 1 || userKm >= 3000) {
    alert("Please enter a valid number between 1 and 3000.");
}
console.log(userKm);


//Second prompt
userAgeStr = prompt("Insert your age in numbers");
//prompt controls
if (userAgeStr === null || userAgeStr.trim() === "") {
    alert("Please enter numbers only (no letters or symbols).");
}

userAge = parseInt(userAgeStr);

//age range controls
if (isNaN(userAge) || userAge <= 0 || userAge > 110) {
    alert("Please enter a valid age between 0 and 110.");
}
console.log(userAge);


//Canculating the regular price of the ticket
let ticketRegPrice = parseFloat(userKm * 0.21);
console.log(ticketRegPrice);
//Canculating the 20% discounted price of the ticket
let ticket20 = parseFloat(ticketRegPrice - ((ticketRegPrice * 20) / 100));
console.log(ticket20);
//Canculating the 40% discounted price of the ticket
let ticket40 = parseFloat(ticketRegPrice - ((ticketRegPrice * 40) / 100));
console.log(ticket40);


//Main program
let result = 0;

if (userAge < 18){
    result = ticket20;
}
else if (userAge > 65){
    result = ticket40;
}
else {
    result = ticketRegPrice;
}
console.log(`The price of your ticket is ${result.toFixed(2)}`);

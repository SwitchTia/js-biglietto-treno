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

//ticket20 = (ticketRegPrice / 100) * 20
//ticket40 = (ticketRegPrice / 100) * 40

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
userKm = parseInt(userKmStr);

//controls
if (userKm <= 1 || userKm >= 3000) {
    alert("Please enter a valid number between 1 and 3000.");
}
console.log(userKm);

userAgeStr = prompt("Insert your age in numbers");
userAge = parseInt(userAgeStr);
console.log(userAge);

let ticketRegPrice = parseFloat(userKm * 0.21).toFixed(2)
console.log(ticketRegPrice);

let ticket20 = parseFloat(ticketRegPrice - ((ticketRegPrice / 100) * 20)).toFixed(2);
console.log(ticket20);

let ticket40 = parseFloat(ticketRegPrice - ((ticketRegPrice / 100) * 40)).toFixed(2);
console.log(ticket40);



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
console.log(`The price of your ticket is ${result}`);

//faccio il bonus dopo palestra))

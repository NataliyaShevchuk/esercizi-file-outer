/*
    Somma e media
    Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.
    Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

*/

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;

const sum = a + b + c + d + e;
console.log("somma", sum);

const mid = sum / e;
console.log("media", mid);

//----------------------------------------------------

/*
    Quanti anni ha?
    Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
    Restituisca in output entrambi i risultati.

    Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

*/

/******** GETFULLYEAR */


const date = new Date();
let   currentYear = date.getFullYear();
console.log("current Year", currentYear);


//*********************************** */

/*********CONSTUCTOR = gives you day of the week/ month/ day/ year/ and the hour*/
const demo =  new Date();
let constructor = demo.constructor();
console.log("constructor", constructor);


/*********************************** */

/***************** getDate = gives you the current day of the month*/

const demo2 =  new Date();
let getDate = demo2.getDate();
console.log("getDate", getDate);

/*********************************** */

/***************** getTimeZoneOffset = gives you the difference between local and international time*/

const demo3 =  new Date();
let getTimeZoneOffset = demo3.getTimezoneOffset();
console.log("getTimezoneOffset", getTimeZoneOffset );

/*********************************** */

/***************** PROTOTYPE = allows you add properties to an object of your control*/

Date.prototype.myMonth = function() {
    if (this.getMonth() == 0) {return "January"};
    if (this.getMonth() == 1) {return "February"};
    if (this.getMonth() == 2) {return "March"};
    if (this.getMonth() == 3) {return "April"};
    if (this.getMonth() == 4) {return "May"};
    if (this.getMonth() == 5) {return "June"};
    if (this.getMonth() == 6) {return "July"};
    if (this.getMonth() == 7) {return "August"};
    if (this.getMonth() == 8) {return "September"};
    if (this.getMonth() == 9) {return "October"};
    if (this.getMonth() == 10) {return "November"};
    if (this.getMonth() == 11) {return "December"};
};

const d4 = new Date();
let demo4= d4.myMonth();
console.log(demo4);

/*********************************** */


// const userYearOfBirth = prompt("Ciao, quando sei nato?");
// console.log("anno di nascità", userYearOfBirth);
// const userAge = currentYear - userYearOfBirth; 
// console.log("età", userAge);
// const onehundred = 100;
// const yearsUntilonehundred = onehundred - userAge;
// console.log("you have still time", yearsUntilonehundred);

//---------------------------------------------------------------------

/*
Gatti in fila
Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)
Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4
Consigli:
Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
utilizza Math.ceil (arrotonda sempre all'intero superiore).
*/

const totGatti = 44;
const gattiInFila = 6;

const numeroFile = Math.ceil(totGatti / gattiInFila);
console.log("numero di file", numeroFile);

const gattiMancanti = (numeroFile * gattiInFila) - totGatti;
console.log("numero di gatti mancanti", gattiMancanti);

//-------------------------------------------------------------------------

/*
    Conta il tempo
    Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
    poi stampi il risultato. L'output avrà solo numeri interi.

    Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

    Consigli:
    In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

*/

const numeroArr = Math.floor(12560 / 3600);
console.log("numero round", numeroArr);
const numeroSec = new Date(numeroArr);

let demo6 = new Date();
const sec = demo.getSeconds(numeroArr);
console.log("secondi", sec);


const minuti = demo6.getMinutes(numeroArr);
console.log("minuti", minuti);

const ore = demo6.getHours(numeroArr);
console.log("ore", ore);





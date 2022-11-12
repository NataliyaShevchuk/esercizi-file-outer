/*
    Pari o dispari?
    Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
        Esempi:
        Input: numero = 63
        Output: 1
        Input: numero = 24
        Output: 0
    Consigli:
    Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 
    (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

*/

// const input = prompt("scrivi un numero");

// if (input % 2 === 0 ){
//     console.log("il numero è pari", input);
// } else{
//     console.log("il numero non è pari", input);
// }

//---------------------------------------------------------------

/*
Menu dei dolci
Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.
Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia
    Input: scelta = 7
    Output: Dolce non disponibile
*/

const listaDolci = ["Tiramisù", "Torta della nonna", "Cheescake alla nutella", "Macedenia"];
const selectLista = document.getElementById("lista-dolci");

const selectIndiceSelezionato = selectLista.selectedIndex;
const indiceSelezionato = selectLista.options[selectIndiceSelezionato];
console.log("indice selezionato", indiceSelezionato);
let valoreDentroOption = indiceSelezionato;
let testoDentroOption = indiceSelezionato;


    if (testoDentroOption === valoreDentroOption && selectIndiceSelezionato === indiceSelezionato) {
        console.log("ottima scelta");
    } else{
        console.log("mi dispiace, ma il dolce non è presente nella lista");
    }


    






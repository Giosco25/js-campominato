// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// Chiedere al computer di generare 16 numeri casuali da 1 a 100 => che vengono chiamate MINE
function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}
function generaMine() {
    var mine = [];
    for (var i = 0; i < 16; i++) {
    var numero_generato = generaRandom(1, 100);
     mine.push(numero_generato);

 }
    return mine;
}
var listaMine = generaMine();
console.log(listaMine);
var next = true;
while (next) {
    var numero_utente = parseInt(prompt('Scrivi un numero da 1 a 100'))
    console.log(numero_utente);
    if (controlloMine(listaMine ,numero_utente)) {
        next = false;
        console.log('hai perso');
    }
}

function controlloMine(lst, numero) {
    var trovato = false;
    for (var i = 0; i < listaMine.length; i++) {
     if (lst[i] == numero) {
        trovato = true;
        }
    }
    return trovato;
}

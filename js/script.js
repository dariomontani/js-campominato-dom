// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :
// Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


let play = document.querySelector('input');
console.log(play);

let scelta = document.getElementById('levels');
console.log(scelta);

let contenitoreQuadrati = document.querySelector('.container');
console.log(contenitoreQuadrati);

function numeriRandom (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

play.addEventListener('click', function(){
    if (scelta.value == 'easy') {
        contenitoreQuadrati.innerHTML = '';
        for (let i = 0; i < 100; i++) {
            let quadrati = document.createElement('div');
            quadrati.classList.add('easy');
            let random = numeriRandom(1, 100);
            quadrati.append(random);
            contenitoreQuadrati.append(quadrati);

            quadrati.addEventListener('click', function () {
                this.classList.add('blue');
            });
        }
    } else if (scelta.value == 'medium') {
        contenitoreQuadrati.innerHTML = '';
        for (let i = 0; i < 81; i++) {
            let quadrati = document.createElement('div');
            quadrati.classList.add('medium');
            let random = numeriRandom(1, 81);
            quadrati.append(random);
            contenitoreQuadrati.append(quadrati);

            quadrati.addEventListener('click', function () {
                this.classList.add('blue');
            });
        }
    } else if (scelta.value == 'crazy') {
        contenitoreQuadrati.innerHTML = '';
        for (let i = 0; i < 49; i++) {
            let quadrati = document.createElement('div');
            quadrati.classList.add('crazy');
            let random = numeriRandom(1, 49);
            quadrati.append(random);
            contenitoreQuadrati.append(quadrati);

            quadrati.addEventListener('click', function () {
                this.classList.add('blue');
            });
        }
    }
});


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

// genero 16 numeri casuali senza duplicati
function numeriRandom(min, max) {
    const arraySedici = [];
    let numeriCasuali = Math.floor(Math.random() * (max - min)) + min;
    for (let i = 0; i < 16; i++) {
        while (!(arraySedici.includes(numeriCasuali))) {
            arraySedici.push(numeriCasuali);
            i++;
        }
    }
    return arraySedici;
}

let sediciNumeri = numeriRandom(1, 16);
console.log(arraySedici);

// quadrati.addEventListener('click', function(){

// });
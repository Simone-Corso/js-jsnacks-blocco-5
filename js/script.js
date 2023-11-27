//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
//Infine stampa separatamente i 3 array.

const containerElement = document.querySelector('main > section.car');

const carBenzina = [ {
    car: 'volkswagen', 
    modello: 't-cross',
    alimentazione: 'benzina',

},

{
    car: 'ford', 
    modello: 'focus',
    alimentazione: 'benzina',
},

{
    car: 'nissan', 
    modello: 'micra',
    alimentazione: 'benzina',
}
];

const carDiesel = [ {
    car: 'volkswagen', 
    modello: 't-roc',
    alimentazione: 'diesel',

},

{
    car: 'ford', 
    modello: 'kuga',
    alimentazione: 'diesel',
},

{
    car: 'nissan', 
    modello: 'r-35',
    alimentazione: 'diesel',
}
];

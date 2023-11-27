//Crea un array di oggetti che rappresentino delle persone.
//Ogni persona ha un nome, un cognome e un'età.

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


const containerElement = document.querySelector('main > section.lista');

const listaPersone = [
    {
        name: 'Simone',
        lastname: 'gino',
        age: '54',
    },
    {
        name: 'Federico',
        lastname: 'rico',
        age: '90',
    },

   {
       name: 'Jonny',
       lastname: 'bar',
       age: '78',
},

    {
        name: 'Goku',
        lastname: 'potenza',
        age: '23',
    },

];

const listaPersone = [listaPersone];
const lista = listaPersone.map((listaPersone) =>{
    return listaPersone * listaPersone;

});

console.log(lista);

//Crea un array di oggetti che rappresentino delle persone.
//Ogni persona ha un nome, un cognome e un'età.

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


const containerElement = document.querySelector('main > section.lista');

const ListaPersone = [
    {
        name: 'Simone',
        lastname: 'gino',
        age: '17',
    },
    {
        name: 'Federico',
        lastname: 'rico',
        age: '15',
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

const listaPersone = [ListaPersone];
const lista = listaPersone.map((listaPersone) =>{
    return listaPersone < 18 ;

});
console.log(listaPersone);

console.log(lista);

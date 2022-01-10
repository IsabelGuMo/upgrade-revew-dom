//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let countryList = document.createElement('ul');

for (const country of countries) {
    let countryName = document.createElement('li');

    countryName.textContent = country; 
    countryList.appendChild(countryName);
}
document.body.appendChild(countryList);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.



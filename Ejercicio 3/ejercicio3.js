// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
let control = true;
let array = [];
let i = 0;
const resultSection = document.querySelector('#result-section');


while(control){
    const number = askNumber();

    if (!isNaN(number)){
        array.push(number);
    } 
    
    if (number == 0) control = false;
};

const result = document.createElement('p');
result.innerText = array;
resultSection.appendChild(result);

function askNumber(){
    const number = Number(prompt('Enter a number'));
    return number
};


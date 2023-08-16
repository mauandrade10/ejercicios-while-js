//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const number = document.querySelector('#number');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let x = 1;
    let multiples = '';
    const text = document.createElement('p');

    while (x <= Number(number.value)){
        if (x % 5 == 0){
            multiples = multiples + ` ${x}`;
        }
        x++;
    }

    text.innerText = multiples;
    result.appendChild(text);
});
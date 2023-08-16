//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let result = '';
let control = true;
const resultSection = document.querySelector('#result-section');

while (control){
    const text = prompt('Enter a chracter or a word');
    if (text == '') control = false;
    else result +=  ' ' + text;
};

const finalText = document.createElement('p');
finalText.innerText = result;
resultSection.appendChild(finalText);

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let i = 1;
let array = [];


while(i<=2){
    const number = prompt(`Enter the ${i} number between 1 and 50`);
    if (Number(number) < 1 || Number(number) > 50){
        alert('The number is incerrect. You must enter a number between 1 and 50');
    }
    else{
        array.push(number);
        i = i+1;
    } 
};

i = 1;
let control = 0;

const ordenedArray = array.sort(function(a,b){
    return a-b;
});

while(i<=50){
    if (ordenedArray[control] == i){
        console.log('¡Lotería!');
        control++;
    }
    else console.log(i)

    i++;
}
//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let day = '';

const infoDays = [
    {
        day: 'lunes',
        messaje: 'Feliz inicio de semana'
    },{
        day: 'martes',
        messaje: 'Martes locos en KFC'
    },{
        day: 'miercoles',
        messaje: 'Descuento del 50% off en cine Colombia'
    },{
        day: 'jueves',
        messaje: 'Ya casi es viernes!!'
    },{
        day: 'viernes',
        messaje: 'ES VIERNEESSSSSS'
    },{
        day: 'sabado',
        messaje: 'ES FiN DE SEMANAAAAAA'
    },{
        day: 'domingo',
        messaje: 'Hasta la próxima!'
    }
]

while(day != 'domingo'){
    day = prompt('Ingresa un día');
    day = day.toLowerCase();
    if(infoDays.some(info => info.day == day)){
        const daySelected = infoDays.find(info => info.day == day);
        alert(daySelected.messaje);
    }
    else alert('Día inválido');
};
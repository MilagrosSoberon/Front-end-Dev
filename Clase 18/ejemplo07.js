const nombre = prompt('Ingrese su nombre','');
const today = new Date();
const hr = today.getHours();

if(hr<12 && hr>7){
    document.write(`Buenos dias ${nombre}`)
}
else if (hr>=12 && hr<=20){
    document.write(`Buenas tardes ${nombre}`) 
}
else{
    document.write(`Buenas noches ${nombre}`)
}
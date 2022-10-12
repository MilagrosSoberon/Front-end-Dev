let x = 1;
const tope = 5;
let suma = 0;

while(x<=tope){
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${tope}` ,''));
    suma += valor; 
    x++;
}

document.write(suma + '<br/>');
document.write(`La suma de valores son ${suma}`);
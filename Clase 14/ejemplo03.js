
const nombre = prompt('Ingrese su nombre','');
const nota = parseInt(prompt('Ingrese su nota',''));

console.log(nombre);
console.log(nota);

if(Number.isNaN(nota)){
    document.write('La nota ingresada no es valida');
}else if(nota>=4){
    document.write(`${nombre} estás aprobado/a con ${nota}`
    )
}else{
    document.write(`${nombre} estás desaprobado/a con ${nota}`
    )
}

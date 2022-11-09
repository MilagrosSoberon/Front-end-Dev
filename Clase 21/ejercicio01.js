const edad = parseInt(prompt('Ingrese su edad',''));

if(Number.isNaN(edad)){
    document.write('La edad ingresada no es valida')
}
else if(edad>=18){
    document.write('Podes conducir')
}else{
    document.write('No podes conducir')
}
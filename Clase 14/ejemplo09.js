function validarLargo(texto,largoRequerido){
    return texto.length >= largoRequerido
}

function validarForm(){
    const nombreValido = true;
    const passwordValido = validarLargo(document.form1.text1.value, 5)

    const resultado = nombreValido && passwordValido;
    if(resultado){
        alert('Es valido')
    }else{
        alert('No es valido')
    }
}
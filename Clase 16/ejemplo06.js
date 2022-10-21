const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click',function(e){
    e.currentTarget.classList.toggle('activo');


})

//classList representa una lista de clases asignadas al elemento
//toggle cambia la clase
//add agrega una clase
//remove remueve una o mas clases
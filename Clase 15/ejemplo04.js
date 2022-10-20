function todosLosParrafos(){
    const allparrafos = document.getElementsByTagName("p");//querySelectorAll
    console.log(allparrafos);

    const num = allparrafos.length;

    alert(`Hay ${num} elementos <p> dentro de este doc`);
}

function parrafosCaja1(){
    const caja1 = document.getElementById('caja1');
    const caja1Parrafos = caja1.getElementsByTagName('p');

    const num = caja1Parrafos.length
    alert(`Hay ${num} elementos <p> dentro de este doc`);
}

function parrafosCaja2(){
    const caja2 = document.getElementById('caja2'); 
    const caja2Parrafos = caja2.getElementsByTagName('p');

    const num = caja2Parrafos.length
    alert(`Hay ${num} elementos <p> dentro de este doc`);

}
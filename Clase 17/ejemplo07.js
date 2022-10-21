const frutas = ['palta','naranjas','manzanas','anana','bananas'];

console.log(frutas.sort()); //ordena alfabeticamente

const numeros = [99,10,2,5,8,3];

console.log(numeros.sort()) //ordena segun el primer numero del numeor mas grande


const num = numeros.sort(function(a,b){
return a-b; //ordenamos de la A-Z

})

const num2 = numeros.sort(function(a,b){
    return b-a; //ordenamos de la Z-A
    
    })

console.log(num)
console.log(num2)

const palabras = ['flavia','pablo','abeja','perro','animal'];
 
console.log(palabras.sort().reverse());//posible solucion

const palabrs = palabras.sort(function(a,b){
    if(b>a) return -1
    return 0;
})//otra solucion


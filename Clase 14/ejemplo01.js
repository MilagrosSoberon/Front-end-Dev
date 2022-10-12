const num1 = parseInt(prompt('Ingrese el primer numero',''));
const num2 = parseInt(prompt('Ingrese el segundo numero',''));
const num3 = parseInt(prompt('Ingrese el tercer numero',''));

if(num1>num2 && num1>num3){
    document.write(`El  numero mayor es ${num1}`)
}else if(num2>num3){
    document.write(`El  numero mayor es ${num2}`)
}else{
    document.write(`El  numero mayor es ${num3}`)
}
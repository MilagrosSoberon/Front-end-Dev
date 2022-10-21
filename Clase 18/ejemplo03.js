const empleados = [
{
    nombre:'Mili',trabajo:'desarrolador'
},
{
    nombre:'Mili',trabajo:'cocinera'
},
{
    nombre:'Mili',trabajo:'desarrolador'
},
{
    nombre:'Mili',trabajo:'policia'
},
{
    nombre:'Mili',trabajo:'maestra'
},
{
    nombre:'Mili',trabajo:'desarrolador'
}

]

const desarrolador = empleados.filter(empleado => empleado.trabajo == 'desarrolador')
console.log(desarrolador)
const nodesarrolador = empleados.filter(empleado => empleado.trabajo != 'desarrolador')
console.log(nodesarrolador)
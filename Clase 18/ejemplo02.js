const alumnos = [
{
    nombre: 'Mili',edad:10
},
{
    nombre: 'Nuria',edad:3
},
{
    nombre: 'Tomas',edad:5
},
{
    nombre: 'Nacho',edad:2
},
{
    nombre: 'Lucho',edad:4
},
{
    nombre: 'Ro',edad:3
}


]


const chicos = alumnos.filter(alumno => alumno.edad<=4);

console.log(chicos)

for(let i=0;i<chicos.length;i++){
    document.write(`<p> Niño ${chicos[i].nombre} ,cuya edad es ${chicos[i].edad}</p>`)
}

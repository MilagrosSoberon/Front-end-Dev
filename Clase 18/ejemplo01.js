const datosUsuarios = [
    {nombre: 'Milagros',password: 'contrasenia'
    },
    {nombre: 'Nuria',password: 'abc1234'
    },
    {nombre: 'Lucho',password: 'documento'
    },
    {nombre: 'Rosario',password: 'abcdefg'
    },
    {nombre: 'Lara',password: 'holaabc'
    }
]

const soloPassword = datosUsuarios.map(function(p){
    return p.password;

})

console.log(soloPassword)
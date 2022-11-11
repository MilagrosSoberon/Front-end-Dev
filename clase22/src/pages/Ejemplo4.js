import alumnos from '../data/alumnos.json';

const Ejemplo4 = props => {
    return (
        <>
            <h1>Json</h1>
            <ul>
                {alumnos.map(alumno=>(
                    <li>{alumno.nombre} {alumno.apellido}</li>
                )
                )}
            </ul>
        </>

    )
}


export default Ejemplo4;
// Arrow Function 

// ES5

function number() {
    return 10; // devuelve el numero 10
}

function numbertwo(a) { 
    return a + 10; // Suma 10 al argumento 'a' y devuelve el resultado
}

function division(a, b) {
    return a / b; // divide el argumento 'a' por el argumento 'b' y devuelve el resultado
}

// ES6

const numberone = () => 10; // Creamos un arrow function que no toma parametros y el numero 10 

const numberthree = (a) => a + 10; // Aqui tomamos un parametro que es 'a' y devuelve 'a' + 10

const divisiontwo = (a, b) => a / b; // Define una arrow function que toma dos parámetros 'a' y 'b' y devuelve el resultado de dividir 'a' y 'b'

// ¿Cual es la diferencia? ES5 utiliza 'function' para definir una funcion y ES6 utiliza un arrow function '() =>' para definir la funcion,es mas concisa.

// REACT

function Task({ task }) {
    return(
        <ul>
            {task.map((task) => ( // Itera sobre el array 'task' usando map y devuelve un elemento <li> por cada elemento en 'task'
                <li>{task}</li> // Crea un elemento <li> con el contenido de cada elemento en 'task'
            ))}
        </ul>
    );
}
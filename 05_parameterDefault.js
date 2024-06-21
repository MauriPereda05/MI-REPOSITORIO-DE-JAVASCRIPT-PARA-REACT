// Parameter Defaults 

// ES5

function add(a, b) {
    b = b === undefined ? 0 : b; // si b es undefined se asigna el valor por defecto de 0
    a = a === undefined ? 0 : a; // si a es undefined se asigna el valor por defecto de 0

    return a + b;
}

// Aquí se llama a la función 'add' con los argumentos 10 y 20.

console.log(add(10, 20));

// ES6

// Se define una función addWithPD utilizando la sintaxis de parámetros por de ES6.

function addWithPD(a = 0, b = 0) {  // asignandoles 0 en caso de que no se pasen valores
    return a + b;
}

// Aqui utilizamos la sintaxis de arrow function de ES6 

const addWithPD = (a = 0, b = 0) => a + b; // Esta funcion tiene dos parametros que son 'a' y 'b' ambos con un valor por defecto de 0
console.log(addWithPD()); 
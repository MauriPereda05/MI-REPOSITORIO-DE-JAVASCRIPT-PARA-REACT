const a = 'hello';
const b = 50;
const c = { d: [true, false] };

// ES5

// En ES5 se usa la sintaxis de clave-valor para construir un objeto literal y se crea un objecto con propiedades 'a', 'b', 'c'.

console.log({ a: a, b: b, c: c});

// ES6

// En ES6 cuando el nombre de la clave y la variable son iguales, se puede omitir la parte de clave-valor.

console.log({ a, b, c});
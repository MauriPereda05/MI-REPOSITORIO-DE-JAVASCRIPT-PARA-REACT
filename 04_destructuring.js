// Destructuring 

const obj = { x: 3.6, y: 7.8 };

//ES5 

// Esta función toma un objeto y calcula el promedio de sus propiedades x, y, y z.

function makeCalculation(obj) {
    const x = obj.x;
    const y = obj.y;
    const z = obj.z === undefined ? 10 : obj.z;

    return Math.floor((x + y + z) / 3); // Math.floor redondea el resultado hacia abajo al entero más cercano. Si z no está definida usa el valor por defecto de 10.
}

console.log(makeCalculation(obj));

//ES6

// Esta función usa destructuring dentro de la función para extraer las propiedades del objeto.

function makeCalculationWithDestructuring(obj) {
    const { x, y: d, z = 0 } = obj; // Esto utiliza la sintaxis de destructuring para extraer las propiedades 'x' y 'y' del objeto 'obj'. Si z no está definida usa el valor por defecto de 0.

    return Math.floor((x + d + z) / 3);
}

// Utiliza destructuring en los parámetros para extraer x, y (renombrada a d) y z del objeto.

function makeCalculationWithDestructuringParam({ x, y: d, z = 4}) {
    return Math.floor((x + d + z) / 3);
}
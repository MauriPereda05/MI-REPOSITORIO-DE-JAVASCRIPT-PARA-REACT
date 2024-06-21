# Javascript para React

## Concatenacion en ES5 y ES6

la concatenación que es una operación fundamental en el manejo de cadenas de texto en JavaScript. La concatenación se refiere a la acción de unir dos o más cadenas para formar una cadena más larga.

```javascript
// Concatenacion en ES5 y ES6

const nombre = 'Mauri';
const apellido = 'Pereda';

// ES5 

// Concatenacion de cadenas usando el operador +

console.log('Bienvenido' + ' ' + nombre + ' ' + apellido);

// ES6

// Uso de plantillas de literales para interpolar variables dentro de una cadena 

console.log(`Hola ${nombre} ${apellido}`);
```

En ES5 la concatenación de cadenas se realiza utilizando el operador + y en ES6 se introducen las plantillas de literales (template literals) que permiten interpolar variables directamente dentro de una cadena utilizando ${}.

## Uso de Objetos Literales en ES5 y ES6

los objetos literales son una forma de definir y crear objetos de manera literal

```javascript
const a = 'hello';
const b = 50;
const c = { d: [true, false] };

// ES5

// En ES5 se usa la sintaxis de clave-valor para construir un objeto literal y se crea un objecto con propiedades 'a', 'b', 'c'.

console.log({ a: a, b: b, c: c});

// ES6

// En ES6 cuando el nombre de la clave y la variable son iguales, se puede omitir la parte de clave-valor.

console.log({ a, b, c});
```

En ES5 para crear un objeto literal se utiliza la sintaxis de clave-valor estándar. Cada propiedad del objeto se define explícitamente con su nombre de clave y su valor correspondiente y en ES6 se simplifica cuando el nombre de la clave y la variable que contiene el valor son iguales. ademas se puede omitir la parte de clave-valor lo cual hace el código más conciso.

## Arrow Function

Una arrow function en JavaScript es una forma concisa de escribir funciones. Se caracteriza por su sintaxis más breve y clara especialmente útil para funciones pequeñas y anónimas.

```javascript
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
```

## Destructuring

La destructuracion permite descomponer objetos y arrays en partes mas pequeñas como variables individuales. Esto se logra mediante una sintaxis especial que facilita la extracción de valores y la asignación a variables

```javascript
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
```

## Parameter Defaults 

Los parametros por defecto en JavaScript (ES6) permiten definir valores que se utilizaran en una funcion si no se proporciona un valor específico al llamarla y mejorando la flexibilidad y claridad del codigo al evitar la necesidad de manejar casos de valores indefinidos o nulos manualmente.

```javascript
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
```

## COMMONJS

En JavaScript las palabras clave import y export se utilizan para modularizar el código permitiendo dividirlo en multiples archivos que pueden importar y exportar funcionalidades

```javascript
//ES5

// Definicion de una funcion sumaADD 

function sumaAdd(a, b){
    return a + b;
}

// API es una constante que contiene la dirección 'localhost' en el puerto 400.

const API = 'localhost:400';

// portNumber es una constante que tiene el valor 3000,este numero de puerto es comunmente usado para servidores locales durante el desarrollo.

const portNumber = 3000;

// EXPORTAR 

// Esta linea exporta la función sumaAdd y las constantes API y portNumber desde este archivo y permite que otros archivos en node.js puedan importar y utilizar estos elementos.

module.exports = { sumaAdd, API, portNumber };

// IMPORTAR

// importa o requiere el módulo ubicado en el archivo './05_parameterDefault.js' 

// const sumaAdd = require('./05_parameterDefault');

// ES6

// Exportacion de la funcion suma utilizando una arrow function

export const suma = (a, b) => a + b;

// La constante nameAPI con el valor 'localhost y la exportacion dee la constante port con el valor 5000

export const nameAPI = 'localhost';
export const port = 5000;

// Importación de las constantes y la función desde './05_parameterDefault'

import { suma,nameAPI,port } from './05_parameterDefault'
```

## ENV

El archivo .env es utilizado para gestionar variables de entorno en aplicaciones de desarrollo. Se pueden definir variables como claves de API,configuraciones de base de datos,tokens de acceso u otras variables sensibles que no deben estar expuestas en el código fuente público.

```javascript
PORT = 3000

API_URL = localhost
```

## Ternarios

El operador ternario en JavaScript es una estructura condicional compacta que permite tomar decisiones basadas en una condición booleana.

```javascript
const nombre = ''; // Se define una variable nombre con una cadena vacía

let mensaje = name ? 'Existe el nombre' : 'No existe el nombre'; // Se utiliza un operador ternario para asignar 'Existe el nombre' 

// ES5

if(nombre) {
    mensaje = 'Existe el nombre'; // Se ejecuta si nombre no es vacio
} else {
    mensaje = 'No existe el nombre'; // Se ejecuta si nombre es vacio
}

// ES6

// El operador ternario en ES6 revisa si nombre es true o false asignando 'Existe el nombre' o 'No existe el nombre' a mensaje.

// nombre ? (message = 'Existe el nombre') : (mensaje = 'No existe el nombre');

console.log(mensaje);
```
## Array Methods

Los métodos de array, o array methods, son funciones integradas en JavaScript que se aplican a objetos de tipo array para realizar operaciones comunes de manipulación, iteración y transformación de datos.

```javascript
// ARRAY METHODS

// Define un array llamado dogs que contiene objetos representando diferentes razas de perros.

const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent', 'Active', 'Alert', 'Faithful', 'Trainable', 'Instinctual',],
    },
    {   id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {   id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Agile', 'Outgoing', 'Trusting', 'Gentle'],
    },
];

// console.log(dogs);

// FIND(Busca un elemento)

const bernice = dogs.find((dog) => dog.name === 'Bernese Mountain Dog'); // Busca en el array 'dogs' el objeto cuyo nombre es 'Bernese Mountain Dog' y lo asigna a la constante 'bernice'.

// SOME(Busca si al menos uno cumple y devuelve en boolean)

console.log(dogs.some((dog) => dog.temperament.includes('Trusting'))); // Verifica si al menos uno de los perros en el array 'dogs' tiene 'Trusting' en el array y temperament.includes verifica si en el array contiene el elemento 'Trusting'

// EVERY(todos deben cumplir y devuelve boolean)

console.log(dogs.every((dog) => dog.temperament.includes('Faithful'))); // Devuelve true si todos los perros cumplen con tener 'Faithful' de lo contrario devuelve false.

// MAP(Muta la data)

// console.log(dogs.map(dog => dog.name)); // Devuelve un array que contiene solo los nombres de cada objeto perro en 'dogs'.

// FILTER

console.log(dogs.filter((dog) => dog.temperament.includes('Faithful'))); // Filtra el array 'dogs' para obtener un nuevo array que contenga solo los perros que incluye 'Faithful'.

// ELIMINAR ELEMENTOS

const idDogDelete = 'dog-2';

console.log(dogs.filter(dog => dog.id !== idDogDelete)); // Filtra 'dogs' para excluir el perro con ID 'dog-2' y devuelve el nuevo array resultante.
```

## Authors

- [@Mauricio Pereda Ruiz](https://github.com/MauriPereda05)


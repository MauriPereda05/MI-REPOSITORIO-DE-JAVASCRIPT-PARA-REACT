// Ternarios

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
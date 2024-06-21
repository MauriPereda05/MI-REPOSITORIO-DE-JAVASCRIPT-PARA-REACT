// Concatenacion en ES5 y ES6

const nombre = 'Mauri';
const apellido = 'Pereda';

// ES5 

// Concatenacion de cadenas usando el operador +

console.log('Bienvenido' + ' ' + nombre + ' ' + apellido);

// ES6

// Uso de plantillas de literales para interpolar variables dentro de una cadena 

console.log(`Hola ${nombre} ${apellido}`);

// REACT

// Definición del componente Button que acepta una clase adicional y otras propiedades

function Button({ className, ...props }) {
    // Uso de las props y la clase adicional para personalizar el componente
    return <div className={`button ${className}`} { ...props} />;
}


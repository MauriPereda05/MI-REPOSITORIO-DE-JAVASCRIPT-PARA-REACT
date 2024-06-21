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
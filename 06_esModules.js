// COMMONJS

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
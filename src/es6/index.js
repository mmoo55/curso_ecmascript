// Como era antes de ES6
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || '32';
    var country = country || 'BO';
    console.log(name, age, country);
}

// con ES6
function newFunction2(name = 'Oscar', age = 32, country = "BO") {
    console.log(name, age, country);
};

// Llamando a las funciones de dos maneras
newFunction2(); // Toma los elementos por defecto
newFunction2('Ricardo', '23', 'CO');

// Concatenación antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Con ES6 se implementó Template literals, usando ${} trae el valor de la variable
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// Multilinea
// Antes
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase épica que necesitamos."

// ES6
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos
// Antes
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

// ES6
let { name } = person;
console.log(name);

// Operador de propagación (nos permite expandir de ciertas situaciones varios elementos)
// ES6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]; // union de los dos array

console.log(education);


// Scope con let y var
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

// const
const a = 'b';
a = 'a';
console.log(a);

// Crar objetos
// Antes, ES5
let name = 'gerson';
let age = 25;

obj = { name: name, age: age };

//ES6
obj2 = { name, age };
console.log(obj2);

// Arrow functions
// Antes
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item){
    console.log(item.name);
});

// ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) = {
    // Code
}

const listOfNames4 = name => {
    // Code
}

const square = num => num * num;    // Retorna el valor, ya no es necesario return


// Promesas (Para asincronismo)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))    // se puede anidar diferentes elementos then en caso de necesitar realizar algo
    .catch(error => console.log(error));

// Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Módulos; importar y exportar de otros archivos o módulos
import { hello } from './module'

hello();

// Generadores, función especial que retorna una serie de valores según el algoritmo definido
function* helloWorld() {
    if (true) {
        yield 'Hellos, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
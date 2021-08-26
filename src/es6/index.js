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
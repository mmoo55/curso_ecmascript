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
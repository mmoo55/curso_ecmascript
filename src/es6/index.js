function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || '32';
    var country = country || 'BO';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Oscar', age = 32, country = "BO") {
    console.log(name, age, country);
};

newFunction2(); // Toma los elementos por defecto
newFunction2('Ricardo', '23', 'CO');


let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// Template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
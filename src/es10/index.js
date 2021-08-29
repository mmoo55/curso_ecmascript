// array.flat; nos permite devolver una matriz con cualquier submatriz aplanada y nos permite entender como está estructurada cada uno de los elementos
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());
console.log(array.flat(2));  // como argumento se puede enviar la profundidad, o el nivel de la matriz

// flatMap; permite mapear cada elemento, pasarle una función y aplanar según el resultado
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// trimStart
let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

// trimEnd
let hello = 'hello world         ';
console.log(hello);
console.log(hello.trimEnd());

// Optional catch binding
try {

} catch (error) {  // Antes
    error
}

try {

} catch {  // Ahora
    error
}

// FromEntries, transforma clave y valor en un objeto, de arrays a objetos
let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

// Objeto de tipo símbolo, nos permite acceder a una descripción
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);
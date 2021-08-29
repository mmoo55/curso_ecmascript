// Object.entries; nos permite transformar un objeto a una matriz
const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

// Object values; devuelve los valores de un objeto a un arreglo
const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);

console.log(values.length);

// Padding, agregamos cadenas vacias o elemntos al string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));

console.log('food'.padEnd(12, '  -----'))

// Trailing comma
const object = {
    name: 'oscar',
}
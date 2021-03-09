console.log('Asignación por destructuring:');

/* Asignación por destructuring nos permite tomar os valores
de las propiedades de un objeto de forma directa, usando el
mismo noimbre de la propiedad*/

let auto = {
    marca: 'Ferrari',
    modelo: '2021',
    color: 'Rojo'
}
console.log('auto: ', auto.marca);
console.log('modelo: ', auto.modelo);
console.log('color: ', auto.color);

console.log('auto: ', auto['marca']);
console.log('modelo: ', auto['modelo']);
console.log('color: ', auto['color']);

let propiedades = 'color';
console.log('color: ', auto['color']);

/*destructuring: */

const { marca, modelo, color } = auto;
console.log('auto: ', marca);
console.log('modelo: ', modelo);
console.log('color: ', color);
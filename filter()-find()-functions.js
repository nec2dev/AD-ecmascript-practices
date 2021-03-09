console.log('Funciones Filte & Find:');

let vehiculos = [{
    id: 1,
    marca: 'Mazda',
    modelo: '2016'
}, {
    id: 2,
    marca: 'Toyota',
    modelo: '2018'
}, {
    id: 3,
    marca: 'Hyundai',
    modelo: '2020'
}];

/*filter function: Recorre cada elemento del array y devuelve
un nuevo array, filtrando solo los elementos solicitados.
Devuelven arrays*/
let filtrarVehiculos = vehiculos.filter(vehiculo => {
    return vehiculo.modelo > 2016
})
console.log('vehículos: ', vehiculos);
console.log('filtrar vehículos: ', filtrarVehiculos);

/*find function: recorre cada elemento del array y devuelve el primer 
elemento que coincida con la búsqueda por fuera del array.
Devuelven Objetos*/
let buscarVehiculo = vehiculos.find(vehiculo => {
    return vehiculo.modelo > 2016
})
console.log('buscar vehículos: ', buscarVehiculo);
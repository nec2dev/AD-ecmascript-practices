console.log('If ternario:');

/*let camisa = {
    talla: 34,
    cantidad: 0,
    stock: false
}*/

let camisa = {
    talla: 34,
    cantidad: 12,
    stock: true
}

const {talla, cantidad, stock} = camisa;

/*If normal*/
if(stock){
    respuesta = 'Hay ' + cantidad + ' camisas';
}else{
    respuesta = 'No hay en stock';
}

console.log('respuesta: ', respuesta);

/*if ternario: sirve para hacer comprobaciones rapidamente
de valores booleanos*/
stock ? respuesta = 'Hay ' + cantidad + ' camisas' : respuesta = 'No hay en stock';
console.log('respuesta: ', respuesta);
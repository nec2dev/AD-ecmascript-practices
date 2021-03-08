console.log('If ternario:');

let camisa = {
    talla: 34,
    cantidad: 0,
    stock: false
}

const {talla, cantidad, stock} = camisa;

if(stock){
    respuesta = 'Hay ' + cantidad + 'de camisas';
}else{
    respuesta = 'No hay en stock';
}

console.log('respuesta: ', respuesta);

console.log('Promesas:');
/*Promises: nos permiten ejecutar un trabajo ya sea síncrono o
asíncrono después de que se realiza una tarea anterior*/

let reservaDestino = [{
    id: 1,
    dia: 'New York'
}, {
    id: 1,
    dia: 'París'
}, {
    id: 1,
    dia: 'Londres'
}]
let reservaDia = [{
    id: 1,
    dia: 'Lunes'
}, {
    id: 1,
    dia: 'Miércoles'
}, {
    id: 1,
    dia: 'Viernes'
}]

let reservaAsiento = [{
    id: 1,
    dia: 'Ventana'
}, {
    id: 1,
    dia: 'Medio'
}, {
    id: 1,
    dia: 'Pasillo'
}]

/*Primer tarea. reservar destino*/
let getDestino = id => {
    return new Promise((resolve, reject) => {
        let destinoDB = reservaDestino.find(destino => destino.id === id)
        if (!destinoDB) {
            reject('No existe el destino seleccionado');
        } else {
            resolve(destinoDB);
        }
    })
}

/*respuesta de la primer tarea*/
getDestino(2).then(destinoDB => {
    console.log(`Tu destino será: ${destinoDB.destino}`)
}).catch(err => {
    console.log('error: ', err);
})
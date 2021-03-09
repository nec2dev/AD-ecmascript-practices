console.log('Async - Await:');
/*Async - Await:: nos simplifica el código para ejecutar promesas
asíncronas con una sola respuesta correcta*/

let reservaDestino = [{
    id: 1,
    destino: 'New York'
}, {
    id: 2,
    destino: 'París'
}, {
    id: 3,
    destino: 'Londres'
}]
let reservaDia = [{
    id: 1,
    dia: 'Lunes'
}, {
    id: 2,
    dia: 'Miércoles'
}, {
    id: 3,
    dia: 'Viernes'
}]

let reservaAsiento = [{
    id: 1,
    asiento: 'Ventana'
}, {
    id: 2,
    asiento: 'Medio'
}, {
    id: 3,
    asiento: 'Pasillo'
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

/*Segunda tarea. reservar día*/
let getDia = id => {
    return new Promise((resolve, reject) => {
        let diaDB = reservaDia.find(dia => dia.id === id)
        if (!diaDB) {
            reject('No existe el día seleccionado');
        } else {
            resolve(diaDB);
        }
    })
}

/*tercer tarea. reservar día*/
let getAsiento = id => {
    return new Promise((resolve, reject) => {
        let asientoDB = reservaAsiento.find(asiento => asiento.id === id)
        if (!asientoDB) {
            reject('No existe el asiento seleccionado');
        } else {
            resolve(asientoDB);
        }
    })
}

/*Respuestas de las tareas asíncronascon Async - Await*/

let informeReserva = async(idDestino, idDia, idAsiento) => {
    let informeDestino = await getDestino(idDestino);
    let informeDia = await getDia(idDia);
    let informeAsiento = await getAsiento(idAsiento);

    return `Tu destino será: ${informeDestino.destino}, Tu día será: ${informeDia.dia}, Tu asiento será: ${informeAsiento.asiento}`
}

informeReserva(1, 2, 3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
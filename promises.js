console.log('Promesas:');
/*Promises: nos permiten ejecutar un trabajo ya sea síncrono o
asíncrono después de que se realiza una tarea anterior*/

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

/*Tareas sincrónicas: Tareas que se ejecutan al mismo tiempo*/
/*Tareas asincrónicas: Tareas que se ejecutan en diferente
 tiempo, en este caso, una tarea espera la ejecución de la otra*/

/*respuesta de la primer tarea*/
getDestino(2).then(destinoDB => {
    console.log(`Tu destino será: ${destinoDB.destino}`)

    /*respuesta de la segunda tarea*/
    getDia(1).then(diaDB => {
        console.log(`Tu día será: ${diaDB.dia}`)

        /*respuesta de la tercer tarea*/
        getAsiento(3).then(asientoDB => {
            console.log(`Tu día será: ${asientoDB.asiento}`)

        }).catch(err => {
            console.log('error: ', err);
        })

    }).catch(err => {
        console.log('error: ', err);
    })

}).catch(err => {
    console.log('error: ', err)
});
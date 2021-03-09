console.log('Callbacks:');

/*Callbacks: es una función que se ejecuta cuando algo
sucede en otra función*/

let paises = [{
    id: 1,
    pais: 'Argentina',
    continente: 'América del Sur'
}, {
    id: 2,
    pais: 'Colombia',
    continente: 'América del Sur'
}, {
    id: 3,
    pais: 'México',
    continente: 'América del Norte y Central'
}]

let tomarPais = (id, callback) => {
    let idPais = paises.find(pais => {
        return pais.id === id;
    })
    if (!idPais) {
        callback('No existe pais en la BBDD');
    } else {
        callback(null, idPais)
    }
}
tomarPais(2, (err, res) => {
    if (err) {
        return console.log(err)
    }
    console.log(res)
});
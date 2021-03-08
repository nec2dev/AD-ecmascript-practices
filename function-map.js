console.log('Función .map():');

let deportes = [{
    titulo: 'Fútbol',
    nivel: 'niños'
},
{   titulo: 'Tenis',
    nivel: 'jóvenes'
},
{   titulo: 'Fútbol',
    nivel: 'Adultos'
}]

let agregarLugar = deportes.map((deporte, index) => {
    if(index === 1){
        deporte.lugar = estadio;
        return deporte;
    }  
})
console.log('Agregar un lugar', agregarLugar);
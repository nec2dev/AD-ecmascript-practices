console.log('Función .map():');

let deportes = [{
    titulo: 'Fútbol',
    nivel: 'Niños'
},
{   titulo: 'Tenis',
    nivel: 'Jóvenes'
},
{   titulo: 'Fútbol',
    nivel: 'Adultos'
}]

let agregarLugar = deportes.map((deporte, index) => {
    if(index === 1){
        deporte.lugar = 'estadio';
    }
    if(index === 2){
        deporte.nivel = 'Jóvenes';
    }  
        return deporte;  
})
console.log('Agregar un lugar', agregarLugar);
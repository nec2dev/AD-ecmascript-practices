console.log('Bucle for :');

let cursos =[{
        titulo: 'Desarrollo backend',
        nivel: 'Medio'
    },
    {
        titulo: 'Desarrollo frontend',
        nivel: 'Básico'
    },
    {
        titulo: 'Desarrollo fullstack',
        nivel: 'Avanzado'
    }];

console.log('Bucle for each:');

/*Bucle for: */
for(let i=0; i<cursos.length; i++){
    console.log('i: ', i)
    console.log(cursos[i].titulo)
    /*interrumpir el bucle for*/
    if(i>0){
        break;
    }
};

/*Bucle for each: es una reducción del código del bucle for,
 y para interrumpirlo se debe colocar en primer instancia el
 return*/
cursos.forEach((curso, index) => {
    /*interrumpir el bucle for each poniendo la tarea antes de imprimir*/
    if(index>0){
        return;
    }
    console.log('index: ', index)
    console.log(curso.titulo)
    
    
})

console.log('Funciones de tipo flecha:');
/*Funciones flecha son funciones anónimasy se deben
guardar en variables constantes para no ser modificada
en el futuro*/

/*
function holaMundo(){
    console.log('Hello World')
}
holaMundo();*/

/*Funciones flecha sin recibir parámetros*/
const holaMundo = ()=>{
    console.log('Hello World')
}
holaMundo();

/*Funciones flecha con un solo parámetro*/
const holaMundoParam = (mensaje) => {
    console.log(mensaje)
}
holaMundoParam('Hello World');

/*Funciones flecha con varios parámetros*/
const holaMundoVariosParam = (mensaje1, mensaje2) => {
    console.log(mensaje1, mensaje2)
}
holaMundoParam('Hello World', 'How are you?');

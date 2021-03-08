console.log('Declaración de var,let,const:');

/* Declaración var: se utiliza para declarar variables globales 
y puede ser transformado su valor en cualquier momento*/

var nombreVar = 'Nahuel';
if (nombreVar == 'Nahuel'){
    var edadVar = 30;
    var nombreVar = 'Mayra';
    console.log('nombre: ', nombreVar);
}
console.log('nombre: ', nombreVar);
console.log('edad: ', edadVar);

/*Declaración let: se utiliza para declñarar variables en
contextos específicos y pueden cambiar su valor en ese
contexto. Fuera de ese contexto la variable let se elimina
para ahorrar espacio de memoria en el navegador*/

let nombreLet = 'Nahuel';
if (nombreLet == 'Nahuel'){
    let edadLet = 40;
    let nombreLet = 'Mayra';
    console.log('nombre: ', nombreLet);
    console.log('edad: ', edadLet);
}
console.log('nombre: ', nombreLet);
//console.log('edad: ', edadLet);

/*Declaración const: Se usa para declarar variables en contextos 
específicos y no puede cambiar su valor en dicho contexto.
Fuera de ese contexto la variable const se elimina
para ahorrar espacio de memoria en el navegador*/

const nombreConst = 'Nahuel';
if (nombreConst == 'Nahuel'){
    const edadConst = 30;
    console.log('edad: ', edadConst);
    console.log('nombre: ', nombreConst);
    //const nombreConst = 'Mayra';
    //console.log('nombre: ', nombreConst);
}
//console.log('nombre: ', nombreConst);
//console.log('edad: ', edadConst);
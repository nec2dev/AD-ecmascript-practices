//https://github.com/public-apis/publics-apis#development

console.log('fetch(): ');

//http: //calapi.inadiutorium.cz/api/v0/en/calendars/general-en

/*Función fetch:Nos permite ejecutar servicioshttp:GET,POST,PUT,DELETE*/
let getApi = () => {
    const endPoint = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en";
    const params = {
        method: "GET",
        header: {
            "Content-Type": "application/json"
        }
    }
    fetch(endPoint, params).then(response => {
        //console.log('Respuesta: ', response)
        return response.json();
    }).then(result => {
        //console.log(result)
        const resultado = result.sanctorale;
        const { title, language } = resultado;

        console.log('resultado: ', title);

    })
}
getApi();
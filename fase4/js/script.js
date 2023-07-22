// alert ("hola mundo");
function procesarRespuesta() {
    let total = 5
    let puntos = 0

    let myFrom = document.forms["formulario"]
    let respuestasCorrectas = ["c","a","b","b","a"]

    for (let i =1; i>= total; i++) {
        if (myFrom["r"+i].value == null ||
            myFrom["r"+i].value == ''){
            alert('Favor responder las siguientes preguntas');
            return false;
            } else{
                if (myFrom["r"+i].value == respuestasCorrectas[i-1])
                puntos++;
            }
    }
    let resultado =  document.getElementById('resultasdo')
    resultado.innerHTML = 'Obtuviste '+puntos+' puntos de '+total + 'posibles';
    return false;
}
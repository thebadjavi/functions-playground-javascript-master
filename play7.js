// Una función puede tener varios parámetros

// Tenemos una función que nos va a decir si la persona está en riesgo cardiovascular. Se dice que una persona está en riesgo cardiovascular si sus latidos están por encima de 200 por minuto, y su tensión arterial superior de 190. La función debe devolver true si hay riesgo cariovascular , o false en caso contrario

// pulso=190, tension=200
function hayRiesgoCardio(pulso, tension) {

    // debemos devolver true si pulso es mayor a 200 y tension es mayor a 190. En caso contrario devolver el valor false
    if (pulso > 200 && tension > 190) {
        return true; // La función termina inmediatamente en esta
    }

    else {
        return false;
    }

}

// persona que tiene 190 latidos por minuto y 200 de tension. no hay riesgo
let pacientePepeTieneRiego = hayRiesgoCardio(290, 200); // true

if (pacientePepeTieneRiego) {
    console.log("Ejecutar la función del smartwatch para que pite y avise a servicios de emergencia")
}

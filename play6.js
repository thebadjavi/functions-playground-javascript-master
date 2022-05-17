// Las funciones pueden devolver un valor. Dicho de otro, las función se evaluan

// Vamos a crear a una función que nos diga si un michi (gato) es cachorro, adulto, o senior. Los cachorros, son menores de un 1 año, los adultos entre 1 y 10, y a partir de 10 son seniors.

function etapaGato(edad) {
    let etapa; // almacenar un string con la etapa actual del gato

    if (edad < 1) {
        etapa = "cachorro";
    }

    else if (edad >= 1 && edad < 10) {
        etapa = "adulto";
    }

    else {
        etapa = "senior"
    }

    return etapa;
};

// Tenemos una base de datos de clientes y el programa debe avisarnos cuando un gato está en la etapa senior, porque queremos enviar un mail al cliente para indicarle los cuidados importantes en esta etapa de la vida felina

// vamos a la base de datos clientes
let edad = 13; // Viene de base de datos
let resultadoGato = etapaGato(edad); // cachorro, adulto, o senior
console.log(resultadoGato);

// console.log(etapa); // etapa NO EXISTE fuera de la función!

if (resultadoGato == "senior") {
    console.log("Enviar correo al cliente con los cuidados, bla bla...");
}

if (resultadoGato == "senior") {
    console.log("Apuntar en el listin telefonico para llamar al cliente para explicarle los cuidados del gato..")
}

if (resultadoGato == "cachorro") {
    console.log("Enviar un correo con la importancia de la castración al cliente")
}







// Saludar pero esta vez la función va a retornar el saludo
function saludar(nombre) {
    return "Hola " + nombre;
}

// Escribe una función que reciba un parámetro. El parámetro va  a ser el nombre de la persona que vamos a saludar. La función debe escribir por el terminal: "Hola, ${nombrePersona}, que tal estás?"

// Los parámetros también son variables
function saludar(name) {
    console.log(`Hola ${name}, qué tal estás?`);
}


// 3 ejecuciones de la función saludar con valores parámetro diferentes

// Ejecutar una función
// Invocar una función
// Llamar a una función
// saludar("Carol");
// saludar("Sara");
// saludar("Fabian");


// Crear una función que me calcule la renta. Si mis ingresos brutos son mayores a 18000 tengo que pagar el 10%. Si no, no tengo que pagar nada. Muestra un mensaje con consola con esta información

function calculoRenta(ingresosBrutos) {
    // Si ingresosBrutos es mayor de 18000 
    // 1. Calcular el 10% de ingresosBrutos (ingresosBrutos * 0.1)
    // 2. Mostrar un mensaje por consola que diga: "Tienes que pagar tanto..."
    // Si ingresosBrutos es menor de 18000
    // mostrar por consola "no tienes que pagar nada a hacienda!"

    if (ingresosBrutos > 18000) {
        console.log(`Tienes que pagar ${ingresosBrutos * 0.1}`);
    }

    else {
        console.log("No tienes que pagar nada a hacienda!");
    }
}

calculoRenta(20000);

function First() {
    console.log("Primera funcion");
}

function second(callback) {
    setTimeout(() => {
        console.log("Segundo funcion");
        callback();
    }, 0);
}

function third() {
    console.log("Tercera funcion");
}

//Llamando funciones
First();
second(third);
//third();
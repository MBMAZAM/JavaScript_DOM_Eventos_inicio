


//Eventos
console.log(1);

//load espera a que el JS  y los archivos que dependan del HTML estén listos
window.addEventListener('load', function() { 
    console.log(2);
}) 

window.onload = function() {
    console.log(3);
}
// Solo espera que se descargue el HTML, pero no espera CSS o imagenes
document.addEventListener('DOMContentLoaded', function(){ 
    console.log(4);
})

console.log(5);

// Para contar el SCROLL
window.onscroll = function() {
    console.log('scrolling...........');
}


// Ejemplo
window.addEventListener('load', imprimir);

function imprimir() {
    console.log(6);
}

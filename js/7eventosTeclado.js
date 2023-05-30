// Eventos de los Inputs y Texarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');   
const mensaje = document.querySelector('#mensaje');      


// nombre.addEventListener('input', function(e){
//     console.log(e.target.value) //Ver la escritura en consola
// });

// email.addEventListener('input', function(e){
//     console.log(e.target.value) //Ver la escritura en consola
// });

// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value) //Ver la escritura en consola
// });

nombre.addEventListener('input', leerTexto3);

email.addEventListener('input', leerTexto3);

mensaje.addEventListener('input', leerTexto3);


// function leerTexto1() {
//     console.log('Escribiendo')
// }

// function leerTexto2(e) {
//     console.log(e.target.value)
// }

function leerTexto3(e) {
    // console.log(e.target.value)

    //console.log(e.target);

    datos[e.target.id] = e.target.value;

    console.log(datos);

}
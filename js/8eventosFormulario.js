
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');   
const mensaje = document.querySelector('#mensaje');   
//El Evento de Submit
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
//Funcion Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Corta la ejecución del código
    }

    // Crear la alerta de Enviar Corectamente
    mostrarAlerta('Mensaje enviado correctamente'); 

});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}


//Refactorizacion
function mostrarAlerta(mensaje, error = null) { 
    const alerta = document.createElement('P');
    
    alerta.textContent = mensaje;
    
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    // Eliminar Alerta
    formulario.addEventListener('click',() => alerta.remove());

    // formulario.addEventListener('click',function() {
    //     alerta.remove()
    // });

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}




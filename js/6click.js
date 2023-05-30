// Seleccionar elemento y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    console.log(evento.target);
    evento.preventDefault(); //Solo para formularios - No recarga
    console.log('Enviando Formulario');
});
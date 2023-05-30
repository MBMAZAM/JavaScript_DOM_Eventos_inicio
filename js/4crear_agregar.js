//---------------------------------------------------------
//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);   

//---------------------------------------------------------
//Generar 2 nuevos enlaces

// const navegacion = document.querySelectorAll(".navegacion");
     
// console.log("navegacion:");
// console.log(navegacion); //El arreglo tiene 2 elementos segun la consola indice 0 y 1
 
// for(let i = 0; i<navegacion.length; i++) {
//     // Generar un nuevo enlace
//     nuevoEnlace = document.createElement('A');
//     // Agregar el href
//     nuevoEnlace.href = 'http://google.com';
//     // Agregar el texto
//     nuevoEnlace.textContent = 'Worldcode';
//     nuevoEnlace.target = '_blank';
//     nuevoEnlace.title = 'Worldcode, códigos de países y monedas. Se abre en nueva pestaña';
 
//     // Agregar la clase
//     nuevoEnlace.classList.add('navegacion__enlace');
//     navegacion[i].appendChild(nuevoEnlace); //Deberia tomar cada elemento del arreglo  y agregarle el nuevo enlace.
// }

// Diferentes
// const navegacionSuperior = document.querySelector('.header .navegacion');
// navegacionSuperior.appendChild(nuevoEnlace);
// const navegacionInferior = document.querySelector('.footer .navegacion');
// navegacionInferior.appendChild(nuevoEnlace);



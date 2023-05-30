// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Camila';
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('Clase_Camila');
nlaces[0].classList.remove('navegacion__enlace');
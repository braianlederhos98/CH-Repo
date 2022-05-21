const mensaje1 = prompt('Ingresa tu nombre');
const mensaje2 = prompt('Ingresa tu apellido');
const mensaje3 = prompt('Ingresa tu edad');

const divContenedor = document.querySelector('.contenedor');
console.log(divContenedor);


const etiquetah2 = document.createElement('h2');
console.log(etiquetah2);

etiquetah2.innerText = mensaje1;
divContenedor.append(etiquetah2);


const etiquetah3 = document.createElement('h3');
etiquetah3.classList.add('eti-h3');
etiquetah3.innerText = mensaje2;
divContenedor.append(etiquetah3);

const etiquetah4 = document.createElement('h4');
etiquetah4.classList.add('eti-h4');
etiquetah4.innerText = mensaje3;
divContenedor.append(etiquetah4);


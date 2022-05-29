const btnGuardar = document.querySelector('#btnGuardar');
const btnCargar = document.querySelector('#btnCargar');
const btnBorrar = document.querySelector('#btnBorrar');

btnGuardar.addEventListener('click',()=>{
    const valor = document.querySelector('#usuario').value;
    localStorage.setItem("valorEnLS", valor);
    document.querySelector('#usuario').value = "";
})

btnCargar.addEventListener('click',()=>{
    const valor = localStorage.getItem('valorEnLS');
    document.querySelector('#valorDesdeLS').innerHTML = valor;
})

btnBorrar.addEventListener('click',()=>{
    document.querySelector('#valorDesdeLS').innerHTML = '';
    //localStorage.removeItem('valorEnLS');
    localStorage.clear();
})
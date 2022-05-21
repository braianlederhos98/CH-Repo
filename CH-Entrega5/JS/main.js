const botonAgregar = document.querySelectorAll('.btn-carrito')
console.log(botonAgregar)


botonAgregar.forEach((agregarAlCarro)=> {

    agregarAlCarro.addEventListener('click', () => {
        const precio = document.querySelector('.producto__precio');
        console.log(precio.innerHTML)
    })

});




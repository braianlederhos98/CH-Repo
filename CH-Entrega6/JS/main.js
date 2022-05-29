const botonAgregar = document.querySelectorAll('.btn-carrito');
const carritoContenedor = document.querySelector('.carrito__contenedor');

const agregarAlCarroProductos = (productoNombre, productoPrecio, productoImg)=>{
    const filaCarrito = document.createElement('div');
    const carritoContenido =  `
    <div class="row">
          <div class="col-6">
              <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${productoImg} class="carrito__imagen">
                  <h6 class="text-truncate ml-3 mb-0">${productoNombre}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="carrito__precio mb-0">${productoPrecio}</p>
              </div>
          </div>
          <div class="col-4">
              <div class="carrito__cantidad d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="carrito__cantidad__input" type="number" value="1">
                  <button class="btn btn-danger borrarbtn" type="button">X</button>
              </div>
          </div>
      </div>`;
      filaCarrito.innerHTML = carritoContenido;
      carritoContenedor.append(filaCarrito)

};

const agregarClick = (e) =>{
    const button = e.target;
    const producto = button.closest('.producto');

    const productoNombre = producto.querySelector('.producto__nombre').textContent;
    //console.log(productoNombre);
    const productoPrecio = producto.querySelector('.producto__precio').textContent;
    //console.log(productoPrecio);
    const productoImg = producto.querySelector('.producto__imagen').src;

    agregarAlCarroProductos(productoNombre, productoPrecio, productoImg);
};

botonAgregar.forEach((agregarAlCarroBotones)=> {

    agregarAlCarroBotones.addEventListener('click', agregarClick);

});






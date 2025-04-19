'use strict'
const destacados = document.querySelector('.columnas-destacados');

// RENDERIZAR productos en destacados

function renderProductosDestacados(){
    // filtramos los productos que tienen el destacado
    const productosDestacados = productos.filter(producto => producto.destacado === true);
    productosDestacados.forEach( (producto) => {
        destacados.innerHTML += `
            <article class="columnas__article oculto">
                <div class="columnas__img">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>
                <div class="columnas__contenedor-texto">
                    <h3 class="columnas__h3">${producto.nombre}</h3>
                    <p class="columnas__precio">$ ${producto.precio}</p>
                    </div>
                    <p class="columnas_descripcion">${producto.descripcion}</p>
                <button class="button columnas__button" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </article>
        `;
    });
}
renderProductosDestacados();
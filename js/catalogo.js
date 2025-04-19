'use strict'
const catalogo = document.querySelector('.columnas-catalogo');


// RENDERIZAR productos en el catalogo

function renderProductos(){
    productos.forEach( (producto) => {
        catalogo.innerHTML += `
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
        `
    })
} 
renderProductos();

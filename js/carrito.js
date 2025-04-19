'use strict'

const cart = document.querySelector('.cart');
const itemsCarrito = document.querySelector('.cart__items');
const subTotal = document.querySelector('.subtotal')
const totalItemsEnCarrito = document.querySelector('.items-en-carrito')
const itemsCheckout = document.querySelector('.contenedor__articulos')


// Carro de Compras --------------------------



 // variable global del precio
 let precioAntesIva = 0

/*
    Cuando haga click en el icono del carro de compras
    aplicar el translate al cart para que aparezca
*/

function mostrarCart() {
    cart.classList.add('cart__activo');
}
function cerrarCart() {
    cart.classList.remove('cart__activo');   
}


// creamos un array para guardar los productos en el carrito
    //cargamos json con el local storage si ya tenian items en el carrito
    // o cargamos un array vacio para que no arroje error si no tenian nada
let carrito = JSON.parse(localStorage.getItem("CARRITO")) || [];
actualizarCarrito();
    
//Agregar al carrito
    
function agregarAlCarrito(id) {
    // verificar si el producto ya esta en el carrito
    if(carrito.some((item) =>  item.id === id)){
        cambiarUniades("mas", id)
    } else {
            //buscamos el id del producto en el array de los productos
        const item = productos.find((producto => producto.id === id));
        // alamcenamos el producto en el carrito
        carrito.push({
            ...item,
            numeroDeUnidades: 1,
        });
    }
    actualizarCarrito();
}
    
    
    
    // Actualizar carrito
    function actualizarCarrito(){
        renderItemsCarrito();
        renderSubtotal();
    
        // guardamos el carrito en la memoria local
        localStorage.setItem("CARRITO", JSON.stringify(carrito))
    }
    

    
    // Calcular y renderizar subtotal
    function renderSubtotal(){
        let precioTotal = 0, itemsTotales = 0;
    
        //calculamos los items totales y el numero de unidades
        carrito.forEach((item) => {
            precioTotal += item.precio * item.numeroDeUnidades;
            itemsTotales += item.numeroDeUnidades;
        
        });

        // renderizamos el subtotal
        subTotal.innerHTML = `
            Subtotal (${itemsTotales} items): $${precioTotal.toFixed(2)}
        `;
        totalItemsEnCarrito.innerHTML = itemsTotales;

        precioAntesIva = precioTotal;
    }
    

    
    
    // renderizar items del carrito
    function renderItemsCarrito(){
        itemsCarrito.innerHTML = "" // para que no se dupliquen los items
        // renderizamos el intem
        carrito.forEach((item) => {
            itemsCarrito.innerHTML +=  `
            <div class="cart__item">
                    <div class="item__info" >
                        <img src="${item.imgSrc}" alt="${item.nombre}">
                        <h4>${item.nombre}</h4>
                    </div>
                    <div class="unit__price">
                        <small>$</small>${item.precio}
                    </div>
                    <div class="units">
                        <div class="btn minus" onclick="cambiarUniades('menos', ${item.id})">-</div>
                        <div class="number">${item.numeroDeUnidades}</div>
                        <div class="btn plus" onclick="cambiarUniades('mas', ${item.id})">+</div>           
                    </div>
                    <div class="item__eliminar" onclick="removerItemCarrito(${item.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <use xlink:href="#trash"></use>
                            </svg>
                        </div>
                </div>
            `
        })
    }
    
    
    // remover item de carrito
    
    function removerItemCarrito(id){
        // filtramos el carro para eliminar el item
        carrito = carrito.filter( (item) => item.id !== id);
    
        actualizarCarrito();
    }
    
    
    // Cambiart numero de unidades en un item
    
    function cambiarUniades(accion, id){
        // metodo para hacer la modificacion en el item
        carrito = carrito.map((item) => {
            // almacenamos le numero antiguo de unidades
            let numeroAnteriorUnidades = item.numeroDeUnidades
    
            //verificamos que el id si este en el carrito
            if(item.id === id) {
                if(accion === "menos" && numeroAnteriorUnidades > 1){
                    numeroAnteriorUnidades--;
                   
                }else if(accion === "mas" && numeroAnteriorUnidades < item.stock){
                     // agregamos unidades siempre que no supere el stock
                    numeroAnteriorUnidades++;
                }
            }
            // devolvemos el item con las unidades actualizadas
            return {
                ...item,
                numeroDeUnidades : numeroAnteriorUnidades,
            };
        });
    
        actualizarCarrito();
    }
'use strict'

const menuHmb = document.querySelector('.header_menu-hmb');
const elementosOcultos = document.querySelectorAll('.oculto');


// Menu hamburguesa

/*
cuando se le de click al incono del menu hamburgesa
cambiar .header_menu-hmb a flex
*/

function mostrarMenu() {
    menuHmb.style.display = 'flex'; 
}
function ocultarMenu() {
    menuHmb.style.display = 'none' ;
}


// observador para animaciones
const observador = new IntersectionObserver((entradas) =>{
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            //agrega clase para para mostrar elemento
            entrada.target.classList.add('show');
        } else {
            entrada.target.classList.remove('show');
            
        }
    })
});


// hacemos que el observador observe todos los elementos
elementosOcultos.forEach((el) => observador.observe(el));
'use strict'

const menuHmb = document.querySelector('.header_menu-hmb');

// Elementos generales y los destacados
const elementosOcultos = document.querySelectorAll('.oculto, .img-1, .img-2');

// Seleccionamos las imagenes de destacados
const imgIzq = document.querySelector('.img-1');
const imgDer = document.querySelector('.img-2');


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
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('show');
  
        // Añade animaciones a las imagenes
        if (entrada.target.classList.contains('img-1')) {
          entrada.target.classList.add('animar-izq');
        } else if (entrada.target.classList.contains('img-2')) {
          entrada.target.classList.add('animar-der');
        }
        // Para reiniciar
      } else {
        entrada.target.classList.remove('show');
        entrada.target.classList.remove('animar-izq', 'animar-der'); 
      }
    });
  });

elementosOcultos.forEach((el) => observador.observe(el));

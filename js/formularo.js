'use strict'

// funcion para remover digitos no numericos y separar numero de tarjeta al 4 numero, separado por espacio


function formatCard(event){
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remueve todos los caracteres que no sean números
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    input.value = value;
};


//funcion solo digitos y formatear el input de la fecha a MM/YY

function formatExp(event){
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remueve todos los caracteres que no sean números
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4); // Añade '/' después de los 2 primeros números
    }
    input.value = value.substring(0, 5); // Limita a 5 caracteres
}


// funcion principal para validar formulario

function validarFormulario(event){
    event.preventDefault();

    // tomar los elementos de los inputs
    const nombre = document.getElementById('cardholder-name');
    const numeroTarjeta = document.getElementById('card-number');
    const fechaExp = document.getElementById('fecha-expiracion');
    const cvv = document.getElementById('cvv');

    // patrones para validar cada input
    const patronNombre = /^[a-zA-Z\s]{3,}$/; //valida nombre con al menos 3 caracteres alphabeticos
    const patronNumeroTarj = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/; // formato tarejeta 1234 5678 9012 3456
    const patronFecha = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY
    const patronCvv = /^\d{3}$/; // CVV formato de 123


    let isValid = true;

    //reset mensajes de error existentes
    document.querySelectorAll('.error').forEach((error) => error.textContent = "");

    //validar nombre en tarjeta
    if(!patronNombre.test(nombre.value.trim())){
        document.getElementById("error-nombre").textContent = "ingresa un nombre valido";
        isValid = false
    }

    //validar numero en tarjeta
    if(!patronNumeroTarj.test(numeroTarjeta.value.trim())){
        document.getElementById("error-numero-tarjeta").textContent = "ingresa un numero valido en formato 1234 5678 9012 3456";
        isValid = false
    }
    
    //validar fecha de expiracion en tarjeta
    if(!patronFecha.test(fechaExp.value.trim())){
        document.getElementById("error-fecha-expiracion").textContent = "ingresa una fecha de expiracion valida en formato MM/YY";
        isValid = false
    }

    //validar CVV de expiracion en tarjeta
    if(!patronCvv.test(cvv.value.trim())){
        document.getElementById("error-cvv").textContent = "ingresa un CVV valido (maximo 3 digitos)";
        isValid = false
    }


    // si le formulario es valio se hace submit
    if(isValid) {
        alert("Pago Exitoso");
        // document.querySelector("formulario").submit();
    }


}

// total checkout

function calcularTotal(precioTotal){
    // Define el porcentaje de IVA (19%)
    const porcentajeIVA = 0.19;

    // tomamos el valor del subtotal
    // actualizamos total en chekout
    const totalCheckOut = document.getElementById('total');
    const iva = precioTotal * porcentajeIVA;
    const precioTotalConIva = precioTotal + iva;
    totalCheckOut.value = precioTotalConIva.toFixed(2)
}
calcularTotal(precioAntesIva);

// interalo para que se actualice el total 
setInterval(() => {
    calcularTotal(precioAntesIva);
}, 500);
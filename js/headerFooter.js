'use strict'

const header = document.querySelector(".header")
const footer = document.querySelector(".footer")


document.addEventListener('DOMContentLoaded', function() {
    fetch('../header.html')
        .then(respuesta => respuesta.text())
        .then(data => {
            header.innerHTML = data;
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('../footer.html')
        .then(respuesta => respuesta.text())
        .then(data => {
            footer.innerHTML = data;
        });
});
import { cambiarTexto } from './funciones19.js';

document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.getElementById('miParrafo');
    const boton = document.getElementById('miBoton');
    boton.addEventListener('click', () => cambiarTexto(parrafo));
});
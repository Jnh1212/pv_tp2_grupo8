import { determinarColor } from './funciones23.js';

const inputElemento = document.getElementById('textoInput');
const visorElemento = document.getElementById('visorTexto');

const procesarEntrada = (e) => {
    const valor = e.target.value;
    visorElemento.textContent = valor;
    visorElemento.style.backgroundColor = determinarColor(valor);
};

inputElemento.addEventListener('input', procesarEntrada);
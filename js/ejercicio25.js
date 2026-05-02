// Importar función desde funciones25.js
import { cambiarColorFondo } from "./funciones25.js";

// Capturar el botón y asignar evento
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", () => {
  cambiarColorFondo();
});
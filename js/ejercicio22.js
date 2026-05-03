import { actualizarTexto } from "./funciones22.js";

const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");

input.addEventListener("input", () => {
  let valor = input.value;

  actualizarTexto(resultado, valor);
});

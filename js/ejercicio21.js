import { datos, cargarPaises, actualizarCapital } from "./funciones21.js";

const selectPaises = document.getElementById("paises");
const selectCapitales = document.getElementById("capitales");

cargarPaises(selectPaises);

selectPaises.addEventListener("change", () => {
  let paisSeleccionado = selectPaises.value;
  actualizarCapital(selectCapitales, paisSeleccionado);
  let capital = datos[paisSeleccionado];

  console.log(`País: ${paisSeleccionado} - Capital: ${capital}`);
});

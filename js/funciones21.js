export const datos = {
  Argentina: "Buenos Aires",
  Brasil: "Brasilia",
  Chile: "Santiago",
  Peru: "Lima",
  Uruguay: "Montevideo",
  Colombia: "Bogotá",
};

export function cargarPaises(selectPaises) {
  for (let pais in datos) {
    let option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    selectPaises.appendChild(option);
  }
}

export function actualizarCapital(selectCapitales, pais) {
  selectCapitales.innerHTML = "";

  if (pais && datos[pais]) {
    let option = document.createElement("option");
    option.value = datos[pais];
    option.textContent = datos[pais];
    selectCapitales.appendChild(option);
  }
}

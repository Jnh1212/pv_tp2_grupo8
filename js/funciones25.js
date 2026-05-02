// Exportar función para cambiar color
export const cambiarColorFondo = () => {
  const colores = ["lightblue", "lightgreen", "lightpink", "lavender", "khaki"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
  console.log(`El color de fondo cambió a: ${colorAleatorio}`);
};


const horas = 2;
const minutos = 45;

const convertirASegundos = (h, m) => (h * 3600) + (m * 60);

const segundosTotales = convertirASegundos(horas, minutos);

console.log(`Tiempo: ${horas} horas y ${minutos} minutos`);
console.log(`Total: ${segundosTotales} segundos`);
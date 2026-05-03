let edades = [15, 18, 20, 22, 25, 30, 35, 40];
let suma = 0;

console.log("Edades:");
for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
  suma = suma + edades[i];
}

let promedio = suma / edades.length;

console.log("El promedio de edad es:", promedio);

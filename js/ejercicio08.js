const notas = [1,2,3,4,5,6,7,8,9,10];

let aprobadas = 0;
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    console.log(`Nota: ${nota}`);

    if (nota >= 6) {
        console.log(`Aprobada: ${nota}`);
        aprobadas++;
    } else {
        console.log(`Desaprobada: ${nota}`);
    }

    suma += nota;
}

let promedio = suma / notas.length;

console.log(`Cantidad de aprobadas: ${aprobadas}`);
console.log(`Promedio de notas: ${promedio}`);


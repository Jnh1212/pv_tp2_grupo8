const base = 10;
const altura = 5;


const calcularArea = (b, h) => b * h;
const calcularPerimetro = (b, h) => 2 * (b + h);


const area = calcularArea(base, altura);
const perimetro = calcularPerimetro(base, altura);


console.log(`Resultados para un rectángulo de ${base}cm x ${altura}cm:`);
console.log(`Área: ${area} cm²`);
console.log(`Perímetro: ${perimetro} cm`);
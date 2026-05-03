let radios = document.querySelectorAll('input[name="lenguaje"]');
let resultado = document.getElementById("resultado");

radios.forEach(radio => {
    radio.addEventListener("change", function() {
        let valor = this.value;

        resultado.textContent = `Seleccionaste: ${valor}`;
        console.log(`Seleccionaste: ${valor}`);
    });
});
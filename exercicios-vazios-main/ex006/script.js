let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));

if (valor2 === 0) {
    alert("Erro: não é possível dividir por zero.");
} else {
    alert(`Resultado da divisão: ${valor1 / valor2}`);
}
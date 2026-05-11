// Função construtora
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    // Método para calcular área
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

// Recebendo dados
let base = prompt("Digite a base do retângulo:");
let altura = prompt("Digite a altura do retângulo:");

// Criando objeto
let ret = new Retangulo(Number(base), Number(altura));

// Exibindo resultado
alert("Área do retângulo: " + ret.calcularArea());

console.log("Área:", ret.calcularArea());
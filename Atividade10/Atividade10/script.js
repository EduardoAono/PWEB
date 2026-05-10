// Função principal que será chamada pelo botão no HTML
function calcularEExibir() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = obterClassificacao(imc);

    document.getElementById('resultado').innerHTML = 
        `Seu IMC é ${imc.toFixed(1)} - ${classificacao}`;
}

// Função específica para o cálculo matemático
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para retornar a mensagem baseada na tabela
function obterClassificacao(imc) {
    if (imc < 18.5) return "MAGREZA (Grau 0)";
    if (imc <= 24.9) return "NORMAL (Grau 0)";
    if (imc <= 29.9) return "SOBREPESO (Grau I)";
    if (imc <= 39.9) return "OBESIDADE (Grau II)";
    return "OBESIDADE GRAVE (Grau III)";
}
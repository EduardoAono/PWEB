const janela = document.getElementById("janela");
const texto = document.getElementById("texto");

// Abrir janela
function abrirJanela() {
    janela.src = "janelaAberta.jpg";
    texto.innerHTML = "Janela Aberta";
}

// Fechar janela
function fecharJanela() {
    janela.src = "janelaFechada.jpg";
    texto.innerHTML = "Janela Fechada";
}

// Quebrar janela
function quebrarJanela() {
    janela.src = "janelaQuebrada.jpg";
    texto.innerHTML = "Janela Quebrada";
}

// Eventos
janela.addEventListener("mouseover", abrirJanela);

janela.addEventListener("mouseout", fecharJanela);

janela.addEventListener("click", quebrarJanela);
// PASSO 1: SELECIONAR OS ELEMENTOS
const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const botaoTema = document.querySelector('#btnTema');
const areResultado = document.querySelector('#painelResultado');
const elemento = document.querySelector('#elemento');
const corpo = document.querySelector('#corpo');

// PASSO 2 & 3: ESCUTAR E MODIFICAR
botaoDia.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value; // pega o texto do input
    areResultado.textContent = `Bom dia ${nomeUsuario}!`;
    corpo.style.backgroundColor = '#ffc0cb';
    // Altera as classes para destacar apenas este botão
    botaoDia.classList.add('botao-clicado');
    botaoNoite.classList.remove('botao-clicado');
});

botaoNoite.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value; // pega o texto do input
    areResultado.textContent = `Boa noite ${nomeUsuario}!`;
    corpo.style.backgroundColor = '#d5c0ff';
    // Altera as classes para destacar apenas este botão
    botaoNoite.classList.add('botao-clicado');
    botaoDia.classList.remove('botao-clicado');
});
// Evento do modo escuro (toggle)
botaoTema.addEventListener('click', function() {
    corpo.classList.toggle('modo-escuro');
});

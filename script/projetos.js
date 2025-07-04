// projetos.js
console.log('Página Projetos carregada.');
function voltarPagina() {
  window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
  const botaoVoltar = document.createElement('button');
  botaoVoltar.textContent = 'Voltar';
  botaoVoltar.style.position = 'fixed';
  botaoVoltar.style.top = '20px';
  botaoVoltar.style.left = '20px';
  botaoVoltar.style.padding = '10px 15px';
  botaoVoltar.style.backgroundColor = '#333';
  botaoVoltar.style.color = '#fff';
  botaoVoltar.style.border = 'none';
  botaoVoltar.style.borderRadius = '5px';
  botaoVoltar.style.cursor = 'pointer';
  botaoVoltar.onclick = voltarPagina;

  document.body.appendChild(botaoVoltar);
});

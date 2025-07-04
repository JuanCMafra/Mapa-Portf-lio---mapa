function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos.');
    return false;
  }

  if (!emailValido.test(email)) {
    alert('Digite um email válido.');
    return false;
  }

  alert('Mensagem enviada com sucesso!');
  return true;
}

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

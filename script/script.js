function mostrarAlerta() {
  alert('Obrigado por visitar meu portfólio!');
}

function alternarCorFundo() {
  const intro = document.getElementById('intro');
  intro.style.backgroundColor =
    intro.style.backgroundColor === 'gray' ? '#f4f4f4' : 'gray';
}

function voltarPagina() {
  window.history.back();
}




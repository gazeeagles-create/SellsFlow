fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titulo').textContent = data.titulo;
    document.getElementById('descricao').textContent = data.descricao;
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));

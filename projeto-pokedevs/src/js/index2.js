// Selecionando as imagens com seus respectivos IDs
const umbrella = document.getElementById('umbrella');


// Adicionando o evento de clique no botão
document.getElementById('transitionButton').addEventListener('click', function() {
  // Adiciona a animação a ambas as imagens
  umbrella.classList.add('grow');
  
  
  // Espera a animação de crescimento antes de redirecionar
  setTimeout(function() {
    window.location.href = "../page2.html"; // Redireciona para a nova página
  }, 1000);
});

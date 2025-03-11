
// Função para atualizar o ano automaticamente no footer
function updateYear() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;  // Atualiza o ano
}

// Chama a função para gerar as imagens quando a página carregar

document.addEventListener('DOMContentLoaded', function() {
    updateYear();
});

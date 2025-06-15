document.addEventListener('DOMContentLoaded', () => {
    // Lógica para galeria de imagens
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-images .thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove a classe 'active' de todas as miniaturas
            thumbnails.forEach(t => t.classList.remove('active'));
            // Adiciona a classe 'active' à miniatura clicada
            thumbnail.classList.add('active');
            // Altera a imagem principal para a imagem clicada
            mainProductImage.src = thumbnail.dataset.full;
            mainProductImage.alt = thumbnail.alt;
        });
    });

    // Lógica para abas (tabs)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');
            // Ativa o conteúdo da aba correspondente
            const targetTab = button.dataset.tab;
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Opcional: Adicionar funcionalidade para o ícone de busca (pode ser um modal ou redirecionamento)
    const searchIcon = document.querySelector('.header-icons .fa-search');
    searchIcon.addEventListener('click', () => {
        alert('Funcionalidade de busca ainda não implementada neste modelo.');
        // Aqui você integraria um modal de busca ou redirecionaria para uma página de busca.
    });
    
    // Opcional: Adicionar funcionalidade para o ícone de carrinho personalizado
    const wineGlassIcon = document.querySelector('.header-icons .fa-wine-glass');
    if (wineGlassIcon) {
        wineGlassIcon.addEventListener('click', () => {
            alert('Seu "carrinho" de favoritos está vazio! Explore nossos vinhos.');
            // Isso pode levar para uma página de lista de desejos ou um modal de "carrinho"
        });
    }
});

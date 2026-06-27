// Função para alternar entre as abas do site
function openTab(event, tabId) {
    // 1. Esconder todos os conteúdos de abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Remover a classe 'active' de todos os botões do menu
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Mostrar o conteúdo da aba atual e marcar o botão como ativo
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Função para validar a resposta do Quiz rápido
function checkAnswer(isCorrect) {
    const feedbackBox = document.getElementById('quiz-feedback');
    feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect) {
        feedbackBox.textContent = "Parabéns, você acertou! Desconfiar e verificar em fontes confiáveis é o primeiro passo para combater a desinformação digital.";
        feedbackBox.classList.add('correct');
    } else {
        feedbackBox.textContent = "Atenção! Compartilhar sem checar espalha o problema. Na dúvida, segure o dedo e não envie.";
        feedbackBox.classList.add('incorrect');
    }
}

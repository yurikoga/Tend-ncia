const buttons = document.querySelectorAll('.neu-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Alterna a classe 'pressed' para demonstrar o efeito visual
        this.classList.toggle('pressed');
        
        // Feedback visual no console
        console.log("Botão clicado!");
    });
});

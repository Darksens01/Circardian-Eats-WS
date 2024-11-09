function redirectToDownloadPage() {
    window.location.href = 'https://play.google.com/store/games?hl=es_419'; // Reemplaza con la URL de destino
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const plusMinus = button.querySelector('.plus-minus');

        faqAnswer.classList.toggle('open');

        plusMinus.textContent = faqAnswer.classList.contains('open') ? '-' : '+';
    });
});

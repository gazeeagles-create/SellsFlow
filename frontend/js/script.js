// Menu hambúrguer
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Formulário de demonstração
document.querySelector('.demo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target[0].value;
    const email = e.target[1].value;
    const telefone = e.target[2].value;

    alert(`Obrigado, ${nome}! Sua solicitação foi enviada. Entraremos em contato por ${email} ou ${telefone}.`);
    e.target.reset();
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

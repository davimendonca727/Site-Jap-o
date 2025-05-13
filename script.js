// Animação de bandeira japonesa piscando no título
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector(".banner h2");

    setInterval(() => {
        titulo.style.opacity = titulo.style.opacity === "1" ? "0.8" : "1";
    }, 1000);
});

// Animação suave de rolagem
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// ===== MODO OSCURO =====
const toggleDark = document.getElementById('toggle-dark');

if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// ===== MENU HAMBURGUESA =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Abrir menú automáticamente en mis-cursos.html (móvil)
if (window.location.pathname.includes('mis-cursos.html') && window.innerWidth <= 768) {
    navMenu.classList.add('show');
}

// ===== REDIRECCIÓN FORMULARIO LOGIN =====
const formLogin = document.querySelector('form.form-login');

if(formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'dashboard.html';
    });
}

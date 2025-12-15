// ===== MODO OSCURO =====
const toggleDark = document.getElementById('toggle-dark');

// Activa modo oscuro si ya estaba guardado
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Cambia modo oscuro al hacer clic
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

// Cierra el menú al hacer clic en un enlace (móvil/PC)
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ===== REDIRECCIÓN FORMULARIO LOGIN =====
const formLogin = document.querySelector('form.form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault(); // evita envío real
        window.location.href = 'dashboard.html'; // redirige al dashboard
    });
}

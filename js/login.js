//Login
//validacion email/pass

const form = document.querySelector('form');
const urlMenu = "menu.html";
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    if (email === 'sence@gmail.com' && password === 'sence') {
        alert('Inicio de sesión exitoso Redirecionando');
        window.location.href = urlMenu;
        form.reset();

    } else {

        alert('Credenciales incorrectas. Por favor intenta nuevamente.');
        form.reset();

    }
});





// Función para mostrar un mensaje temporal
function showMessage(msg) {
    alert(msg);
}

// Cargar la sesión si existe
window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.body.innerHTML = `
            <div class="container">
                <h1>Hola, ${user.name}</h1>
                <p>Has iniciado sesión como <b>${user.email}</b></p>
                <button id="logout-btn">Cerrar Sesión</button>
            </div>
        `;
        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.removeItem("user");
            location.reload();
        });
    }
});

// Manejar inicio de sesión
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let storedUser = JSON.parse(localStorage.getItem("user_db"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("user", JSON.stringify(storedUser));
        showMessage("Inicio de sesión exitoso");
        location.reload();
    } else {
        showMessage("Usuario o contraseña incorrectos. Si no tienes cuenta, regístrate.");
    }
});

// Manejar carga del formulario de registro
document.getElementById('register-link')?.addEventListener('click', function(event) {
    event.preventDefault();
    fetch("components/register.html")
        .then(res => res.text())
        .then(html => {
            document.querySelector(".container").outerHTML = html;
            attachRegisterHandler();
        });
});

// Función para manejar el registro
function attachRegisterHandler() {
    document.getElementById('register-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const newUser = { name, email, password };
        localStorage.setItem("user_db", JSON.stringify(newUser));
        localStorage.setItem("user", JSON.stringify(newUser));
        showMessage("Registro exitoso, bienvenido " + name);
        location.reload();
    });
}

// Manejar login con Google (placeholder)
document.getElementById('google-login')?.addEventListener('click', function() {
    showMessage("Aquí conectaremos con Google Login más adelante.");
});

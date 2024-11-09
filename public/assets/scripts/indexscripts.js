function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

function registerAccount() {
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;
    if (registerEmail === "" || registerPassword === "") {
        alert("Por favor, complete ambos campos para registrarse.");
        return;
    }
    alert("Cuenta registrada con éxito:\nEmail: " + registerEmail);
    closeRegisterModal();
}

function redirectToDashboard() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, complete ambos campos para iniciar sesión.");
        return;
    }
    window.location.href = 'InicioExitoso.html';
}

function redirectToDashboardGoogle() {
    alert("Inicio de sesión exitoso...");
    window.location.href = 'InicioExitoso.html';
}

// auth.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const loginData = Object.fromEntries(formData);
            // Implementasi login (sesuaikan dengan backend Anda)
            console.log('Login attempt:', loginData);
            alert('Login berhasil!');
            window.location.href = 'index.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const registerData = Object.fromEntries(formData);
            // Implementasi registrasi (sesuaikan dengan backend Anda)
            console.log('Register attempt:', registerData);
            alert('Registrasi berhasil! Silakan login.');
            window.location.href = 'login.html';
        });
    }

    // Implementasi login sosial (memerlukan SDK masing-masing platform)
    document.getElementById('facebook-login')?.addEventListener('click', () => {
        // Implementasi login Facebook
        console.log('Facebook login clicked');
    });

    document.getElementById('google-login')?.addEventListener('click', () => {
        // Implementasi login Google
        console.log('Google login clicked');
    });
});

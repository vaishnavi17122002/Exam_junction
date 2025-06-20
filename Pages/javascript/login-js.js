document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const buttonText = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        buttonText.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        buttonText.textContent = 'Show Password';
    }
});


function goBack() {
    window.history.back();
}
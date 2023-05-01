export function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('error-message');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailError.textContent = 'Please enter a valid email address.';
     } else {
    emailInput.classList.remove('invalid');
    emailError.textContent = '';
    }
});
}
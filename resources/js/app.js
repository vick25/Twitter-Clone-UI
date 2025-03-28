const toggleModalBtn = document.querySelector('#toggleModal');
const logoutModal = document.querySelector('#logoutModal');

document.addEventListener("DOMContentLoaded", (event) => {
    if (!logoutModal.classList.contains('hidden')) {
        logoutModal.classList.add('hidden');
    }
    // Toggle the logout modal when the button is clicked
    toggleModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.classList.toggle('hidden');
    });
});
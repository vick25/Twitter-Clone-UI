const toggleModalBtn = document.querySelector('#toggleModal');
const logoutModal = document.querySelector('#logoutModal');
const dialog = document.getElementById('dialog');
const openDialogButton = document.getElementById('openDialogButton');
const jsCloseButton = document.getElementById('close');
const jsClose = document.getElementById('close-dialog"');

document.addEventListener("DOMContentLoaded", (event) => {
    if (!logoutModal.classList.contains('hidden')) {
        logoutModal.classList.add('hidden');
    }
    // Toggle the logout modal when the button is clicked
    toggleModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.classList.toggle('hidden');
    });

    openDialogButton.addEventListener('click', () => {
        dialog.showModal();
    });

    //Backdrop Close
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    jsCloseButton.addEventListener('click', function (e) {
        e.preventDefault();
        dialog.close();
    });

    jsClose.dispatchEvent();
});
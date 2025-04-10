const toggleModalBtn = document.querySelector('#toggleModal');
const logoutModal = document.querySelector('#logoutModal');
const dialog = document.getElementById('dialog');
const openDialogButton = document.getElementById('openDialogButton');
const jsCloseButton = document.getElementById('close');
const jsClose = document.getElementById('close-dialog"');

const modalPost = document.getElementById("formModalPost");
const openModalPostBtn = document.getElementById("openModalPostBtn");
const closeModalPostBtn = document.getElementById("closeModalPostBtn");

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("click", (e) => {
        if (e.target === modalPost) {
            modalPost.classList.add("hidden");
        }
    });

    if (!logoutModal.classList.contains('hidden')) {
        logoutModal.classList.add('hidden');
    }
    // Toggle the logout modal when the button is clicked
    toggleModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.classList.toggle('hidden');
    });

    openDialogButton && openDialogButton.addEventListener('click', () => {
        dialog.showModal();
    });

    //Backdrop Close
    dialog && dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });

    jsCloseButton && jsCloseButton.addEventListener('click', function (e) {
        e.preventDefault();
        dialog.close();
    });

    jsClose && jsClose.dispatchEvent();

    // Listen for open click for the post modal
    openModalPostBtn.addEventListener("click", () => {
        modalPost.classList.remove("hidden");
    });

    closeModalPostBtn.addEventListener("click", () => {
        modalPost.classList.add("hidden");
    });
});
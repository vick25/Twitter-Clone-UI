const toggleModalBtn = document.querySelector('#toggleModal');
const logoutModal = document.querySelector('#logoutModal');
const dialog = document.getElementById('dialog');
const openDialogButton = document.getElementById('openDialogButton');
const jsCloseButton = document.getElementById('close');
const jsClose = document.getElementById('close-dialog"');

const modalPost = document.getElementById("formModalPost");
const openModalPostBtn = document.getElementById("openModalPostBtn");
const closeModalPostBtn = document.getElementById("closeModalPostBtn");

const modalComment = document.getElementById("formModalComment");
const openModalCommentBtns = document.querySelectorAll(".openModalCommentBtn");
const closeModalCommentBtn = document.getElementById("closeModalCommentBtn");

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("click", (e) => {
        if (e.target === modalPost) {
            modalPost.classList.add("hidden");
        }
        if (e.target === modalComment) {
            modalComment.classList.add("hidden");
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

    closeModalPostBtn && closeModalPostBtn.addEventListener("click", () => {
        modalPost.classList.add("hidden");
    });

    // Listen for open click for the comment modal
    openModalCommentBtns.forEach(openModalCommentBtn => {
        openModalCommentBtn.addEventListener("click", (e) => {
            const tweetID = e.currentTarget.id
            const parentElement = document.getElementById(tweetID).closest('li');

            const content = document.getElementById(tweetID).innerText
            const img = parentElement.querySelector('img').src
            const user = parentElement.querySelector('p').innerText
            const username = parentElement.querySelector('span').innerText
            const date = parentElement.querySelector(`#date_${tweetID}`).innerText

            // console.log({ content, img, user, username, date })

            modalComment.classList.remove("hidden");

            const textArea = modalComment.querySelector('textArea');
            const replyButton = modalComment.querySelector('#replyBtn');

            textArea.addEventListener('input', () => {
                replyButton.disabled = textArea.value.trim() === '';
            });

            // Display the elements value on the modal
            modalComment.querySelector('#img').src = img
            modalComment.querySelector('#user').innerText = user
            modalComment.querySelectorAll('.username').forEach(d => {
                d.innerText = username
            })
            modalComment.querySelector('#date').innerText = date
            modalComment.querySelector('#content').innerText = content
            modalComment.querySelector('form').setAttribute('id', tweetID)
            modalComment.querySelector('form').setAttribute('action', `/tweets/${tweetID}/comment`)
        });
    })

    closeModalCommentBtn.addEventListener("click", () => {
        modalComment.classList.add("hidden");
    });

    // const csrfTokenMeta = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
    // const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : null;
    // if (!tweetId || !csrfToken) {
    //     return;
    // }
    // try {
    //     const response = await fetch(`/tweets/${tweetId}/comment`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRF-Token': csrfToken
    //         },
    //         body: JSON.stringify({ tweetId })
    //     });
    //     if (response.ok) {
    //         const svg = this.querySelector<SVGSVGElement>('svg');
    //         if (svg) {
    //             svg.classList.toggle('fill-pink-500');
    //             svg.classList.toggle('stroke-pink-500');
    //         }
    //     }
    // } catch (err) {
    //    return
    // }
});
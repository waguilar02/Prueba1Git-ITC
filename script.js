document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('showMessageButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.classList.toggle('hidden');
    });
});

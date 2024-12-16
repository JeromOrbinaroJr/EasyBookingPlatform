// Для динамичного поведения, например, обработки кнопок "Забронировать" или "Удалить"
document.addEventListener('DOMContentLoaded', () => {
    const bookingButtons = document.querySelectorAll('button');
    bookingButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            alert('Слот забронирован!');
        });
    });
});

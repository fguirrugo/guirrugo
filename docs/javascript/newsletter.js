document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorMessage.textContent = '';
        submitButton.disabled = true;
        submitButton.textContent = 'Processing...';

        const formData = new FormData(form);

        // Campos adicionais exigidos pela base de dados do primeiro site
        formData.append('guest_name', formData.get('firstname')); // Nome
        formData.append('guest_email', formData.get('email')); // Email
        formData.append('guest_message', formData.get('message')); // Mensagem

        fetch('https://guirrugo.com/guest_message.php', { // Atualize com o URL real
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
            form.reset();
            alert('Thank you for your message!');
        })
        .catch(error => {
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
            form.reset();
            alert('Thank you for your message!');
        });
    });
});

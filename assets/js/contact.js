document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("lm3hTrZRX_YFQXlbu"); // Remplace par ton User ID EmailJS

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let params = {
            nom: document.getElementById("nom").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_yirffrq", "template_dlnfh6a", params)
            .then(response => {
                document.getElementById("confirmation").textContent = "Message envoyé avec succès !";
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                document.getElementById("confirmation").textContent = "Erreur lors de l'envoi.";
            });
    });
});

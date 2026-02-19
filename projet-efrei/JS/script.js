document.addEventListener('DOMContentLoaded', () => {
    console.log("Système Efrei chargé.");

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('userEmail').value;
            const status = document.getElementById('statusMessage');

            
            if (email.includes('@')) {
                status.innerHTML = "<p style='color: green; margin-top:10px;'>Message envoyé avec succès !</p>";
                form.reset();
            } else {
                status.innerHTML = "<p style='color: red; margin-top:10px;'>Email invalide.</p>";
            }
        });
    }
});
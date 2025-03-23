document.addEventListener("DOMContentLoaded", function() {
    // Animation d'apparition GSAP
    gsap.from("header", { opacity: 0, y: -50, duration: 1 });
    gsap.from("section", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

    // Changement de texte dynamique
    const phrases = ["ATTISSO Joël Elom","Développeur Web", "Designer UI/UX", "Freelancer", "Ingénieur en domotique"];
    let index = 0;

    function changerTexte() {
        gsap.to("#texte-dynamique", { opacity: 0, duration: 0.5, onComplete: function() {
            document.getElementById("texte-dynamique").textContent = phrases[index];
            index = (index + 1) % phrases.length;
            gsap.to("#texte-dynamique", { opacity: 1, duration: 0.7 });
        }});
    }
    setInterval(changerTexte, 2000);

    // Navigation fluide avec correction des chemins
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let targetPage = this.getAttribute("href");

            // Vérifie si on doit changer de page ou faire un scroll
            if (targetPage.startsWith("#")) {
                const targetElement = document.querySelector(targetPage);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            } else {
                window.location.href = targetPage;
            }
        });
    });
});

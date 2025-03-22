
const phrases = ["Développeur Web", "Designer UI/UX", "Freelancer", "Ingénieur en domotique et automatisation"];
let index = 0;

function changerTexte() {
    const texteElement = document.getElementById("texte-dynamique");
    texteElement.textContent = phrases[index];
    index = (index + 1) % phrases.length;
}


setInterval(changerTexte, 5000);


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation d'apparition
    gsap.from("header", { opacity: 0, y: -50, duration: 1 });
    gsap.from("section", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

    // Effet de texte dynamique
    const phrases = ["Développeur Web", "Designer UI/UX", "Freelancer"];
    let index = 0;

    function changerTexte() {
        gsap.to("#texte-dynamique", { opacity: 0, duration: 0.5, onComplete: function() {
            document.getElementById("texte-dynamique").textContent = phrases[index];
            index = (index + 1) % phrases.length;
            gsap.to("#texte-dynamique", { opacity: 1, duration: 0.5 });
        }});
    }
    setInterval(changerTexte, 2000);

    // Effet Parallax sur la section principale
    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        gsap.to("section", { y: scrollY * 0.3, ease: "power1.out" });
    });
});

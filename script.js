// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Fade in title on load
gsap.to(".title", { duration: 1, opacity: 1 });

// Section animations on scroll
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    gsap.from(section.querySelector("h2"), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: -20,
        opacity: 0,
        duration: 1
    });

    // Animate project cards on scroll
    if (section.id === "projects") {
        const cards = section.querySelectorAll(".project-card");
        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.1 // Stagger the animations
            });
        });
    }
});

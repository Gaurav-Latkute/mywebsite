const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px #38bdf8";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background =
        window.scrollY > 50
            ? "rgba(2,6,23,.95)"
            : "rgba(15,23,42,.9)";
});

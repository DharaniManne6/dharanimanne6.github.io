// mobile menu toggle
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

// typing animation
const words = ["GenAI", "LLMs", "Machine Learning", "NLP", "AI Systems"];
let i = 0;

function typeEffect() {
    document.querySelector(".typing").textContent = words[i];
    i = (i + 1) % words.length;
}

setInterval(typeEffect, 1500);



const themeBtn = document.getElementById("theme");

const sections = document.querySelectorAll(".main");

themeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    })
})
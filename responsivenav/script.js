const burgermenu = document.getElementsByClassName("burgermenu")[0];

const icon = document.getElementById("icon");
icon.addEventListener("click", (e) => {
    burgermenu.classList.toggle("toggle");
});
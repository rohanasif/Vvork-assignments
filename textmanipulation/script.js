const text = document.getElementById("text");
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        var textValue = text.innerText;
        const btnValue = e.target.value;
        if (btnValue === "uppercase") {
            textValue = textValue.toUpperCase();
        }
    })
});
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    localStorage.setItem("data", inp.value);
})
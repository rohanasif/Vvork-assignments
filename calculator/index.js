const input = document.getElementById("input");
const btns = document.querySelectorAll("button");
btns.forEach((btnsItem) => {
    btnsItem.addEventListener("click", (e) => {
        if (e.target.innerHTML !== "C" && e.target.innerHTML !== "backspace" && e.target.innerHTML !== "=") {
            input.value += e.target.innerHTML;
        }
        else if (e.target.innerHTML === "=") {
            try {
                input.value = eval(input.value);
            } catch (error) {
                console.log("error")
            }
        }
        else if (e.target.innerHTML === "C") {
            input.value = "";
        }
        else if (e.target.innerHTML === "Del") {
            input.value = input.value.slice(0, -1);
        }
    })
})
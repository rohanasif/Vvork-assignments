const data = []
const obj = {}
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const tbody = document.querySelector("tbody");
submitBtn.addEventListener("click", () => {
    inputs.forEach(input => {
        if (input.type === "text") {
            obj.name = input.value;
        }
        else if (input.type === "email") {
            obj.email = input.value;
        }
        else if (input.type === "password") {
            obj.password = input.value;
        }
    })
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    const allData = JSON.parse(localStorage.getItem("data"));
    for (let person of allData) {
        console.log(person.name, "all data through person");
    }
})

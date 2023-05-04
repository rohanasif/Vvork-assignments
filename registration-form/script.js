const data = []
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const tbody = document.querySelector("tbody");

submitBtn.addEventListener("click", () => {
    const obj = {};
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
    showData();
});

function showData() {
    const allData = JSON.parse(localStorage.getItem("data"));
    let html = "";
    for (let person of allData) {
        html +=
            `<tr>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td><button>Edit</button><td>
            </tr>`;
    }
    tbody.insertAdjacentHTML("beforeend", html);
}

showData();

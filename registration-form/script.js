const data = [];
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const tbody = document.querySelector("tbody");

submitBtn.addEventListener("click", () => {
  const obj = {};
  inputs.forEach((input) => {
    if (input.type === "text") {
      obj.name = input.value;
    } else if (input.type === "email") {
      obj.email = input.value;
    } else if (input.type === "password") {
      obj.password = input.value;
    }
  });
  if (obj.name !== "" && obj.email !== "" && obj.password !== "") {
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
  }
});
const allData = JSON.parse(localStorage.getItem("data"));
if (allData) {
  for (let person of allData) {
    if (person.name !== "" || person.email !== "" || person.password !== "") {
      tbody.innerHTML += `<tr>
                                    <td>${person.name}</td>
                                    <td>${person.email}</td>
                                    <td><button class="editBtn">Edit</button><td>
                                </tr>`;
    }
  }
}

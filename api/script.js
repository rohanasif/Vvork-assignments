const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => handleData(data));

function handleData(a) {
  a.forEach((ele, index) => {
    var li = document.createElement("li");
    li.innerHTML = `<h6>ID: </h6> ${ele.userId}<br>
                    <h6>UserID: </h6> ${ele.id}<br>
                    <h6>Title: </h6> ${ele.title}
                    <h6>Completed: </h6> ${ele.completed}`;
    container.appendChild(li);
  });
}

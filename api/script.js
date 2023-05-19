const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => handleData(data));

function handleData(a) {
  a.forEach((ele, index) => {
    console.log(ele, index);
    var li = document.createElement("li");
    li.innerHTML = `<h6>ID: </h6> ${ele.userId}<br>
                    <h6>UserID: </h6> ${ele.id}<br>
                    <h6>Title: </h6> ${ele.title}`;
    container.appendChild(li);
  });
}

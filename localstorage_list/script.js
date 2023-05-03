var inp = document.querySelector("input");
var btn = document.querySelector("button");
var div = document.querySelector("div");
btn.addEventListener("click", () => {
    var a = JSON.parse(localStorage.getItem("data"));
    if (a) {
        div.innerHTML = inp.value;
        a.push(inp.value);
        localStorage.setItem("data", JSON.stringify(a));
    }
    else {
        localStorage.setItem("data", JSON.stringify([inp.value]));
    }
})

// var showData = JSON.parse(localStorage.getItem("data"));
// if (showData) {
//     showData.map((el, i) => {
//         var li = document.createElement("li");
//         li.innerHTML = `${el}<button onclick="handleClick(${i})">edit</button>`;
//         div.appendChild(li);
//     })
// }
// function handleClick(index) {
//     console.log(index)
// }
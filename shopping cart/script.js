const container = document.querySelector("#container");
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((error) => console.log(error));

var mydata;
function showData(d) {
  handle();
  mydata = d;
  d.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="${item.image}" alt="Card image">
      <h5 class="card-title">${item.title}</h5>
      <h5 class="card-price">$${item.price}</h5>
      <button onclick= "handleAdd(${index})" class="addBtns">Add to cart</button>
    `;
    container.appendChild(card);
  });

  // Show items from localStorage in the cart at the first rendering
  var storedData = JSON.parse(localStorage.getItem("data"));
  if (storedData) {
    storedData.forEach((item) => {
      var div = document.createElement("div");
      div.className = "item";
      div.id = "item-" + item.id;
      div.innerHTML = `
        <img class="card-img" src="${item.image}" alt="Card image">
        <h5 class="card-title">${item.title}</h5>
        <h5 class="card-price">$${item.price}</h5>
        <button onclick= "handleDel(${item.id})" class="delBtns">Delete</button>
      `;
      cart.appendChild(div);
    });
  }
}

function handleAdd(index) {
  var obj = {
    id: mydata[index].id,
    image: mydata[index].image,
    title: mydata[index].title,
    price: mydata[index].price,
  };
  var x = JSON.parse(localStorage.getItem("data"));
  if (x) {
    x.push(obj);
    localStorage.setItem("data", JSON.stringify(x));
  } else {
    localStorage.setItem("data", JSON.stringify([obj]));
  }
  var div = document.createElement("div");
  div.className = "item";
  div.id = "item-" + obj.id;
  div.innerHTML = `
    <img class="card-img" src="${obj.image}" alt="Card image">
    <h5 class="card-title">${obj.title}</h5>
    <h5 class="card-price">$${obj.price}</h5>
    <button onclick= "handleDel(${obj.id})" class="delBtns">Delete</button>
  `;
  cart.appendChild(div);
  handle();
}

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hide");
  cart.classList.toggle("show");
});

function handleDel(id) {
  var x = JSON.parse(localStorage.getItem("data"));
  var index = x.findIndex((item) => item.id === id);
  if (index > -1) {
    x.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(x));
    var itemElement = document.getElementById("item-" + id);
    itemElement.remove();
    handle();
  }
}

let counter = document.getElementById("counter");
function handle() {
  var a = JSON.parse(localStorage.getItem("data"));
  if (a && a.length > 0) {
    counter.innerHTML = a.length;
  } else {
    counter.innerHTML = "";
  }
}

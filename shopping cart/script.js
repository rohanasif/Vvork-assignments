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
      <button onclick="handleAdd(${index})" class="addBtns">Add to cart</button>
    `;

    // Get the count of the item from localStorage
    var storedData = JSON.parse(localStorage.getItem("data"));
    var itemCount = storedData ? getItemCount(storedData, item.id) : 0;

    // Create a counter element
    var counter = document.createElement("div");
    counter.className = "item-counter";
    counter.textContent = itemCount;

    // Append the counter to the card
    card.appendChild(counter);

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
        <button onclick="handleDel(${item.id})" class="delBtns">Delete</button>
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
    // Check if the item already exists in localStorage
    var existingItem = x.find((item) => item.id === obj.id);
    if (existingItem) {
      // If the item already exists, increase its count by 1
      existingItem.count++;
    } else {
      // If the item doesn't exist, add it to localStorage with a count of 1
      obj.count = 1;
      x.push(obj);
    }
    localStorage.setItem("data", JSON.stringify(x));
  } else {
    // If localStorage is empty, add the item with a count of 1
    obj.count = 1;
    localStorage.setItem("data", JSON.stringify([obj]));
  }
  updateCart();
}

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hide");
  cart.classList.toggle("show");
});

function handleDel(id) {
  var x = JSON.parse(localStorage.getItem("data"));
  var index = x.findIndex((item) => item.id === id);
  if (index > -1) {
    // Decrement the count of the item by one
    x[index].count--;

    // If the count reaches zero, remove the item from the cart
    if (x[index].count === 0) {
      x.splice(index, 1);
      var itemElement = document.getElementById("item-" + id);
      itemElement.remove();
    }

    localStorage.setItem("data", JSON.stringify(x));
    handle();

    // Update the counter element for the specific item
    var counterElement = document.querySelector(`#item-${id} .item-counter`);

    // Check if the item still exists in the cart
    if (counterElement) {
      counterElement.textContent = x[index] ? x[index].count : 0;
    }
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

function getItemCount(items, itemId) {
  var count = 0;
  items.forEach((item) => {
    if (item.id === itemId) {
      count += item.count || 1;
    }
  });
  return count;
}

function updateCart() {
  // Clear the existing cart items
  cart.innerHTML = "";

  // Retrieve items from localStorage
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
        <div class="item-counter">${item.count}</div>
        <button onclick="handleDel(${item.id})" class="delBtns">Delete</button>
      `;
      cart.appendChild(div);
    });
  }
  handle();
}

// Add the updateCart() call in the handleAdd() function

function handleAdd(index) {
  var obj = {
    id: mydata[index].id,
    image: mydata[index].image,
    title: mydata[index].title,
    price: mydata[index].price,
  };
  var x = JSON.parse(localStorage.getItem("data"));
  if (x) {
    var existingItem = x.find((item) => item.id === obj.id);
    if (existingItem) {
      existingItem.count++;
    } else {
      obj.count = 1;
      x.push(obj);
    }
    localStorage.setItem("data", JSON.stringify(x));
  } else {
    obj.count = 1;
    localStorage.setItem("data", JSON.stringify([obj]));
  }
  updateCart();
}

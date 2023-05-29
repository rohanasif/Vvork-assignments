const container = document.querySelector("#container");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => cacheData(data))
  .catch((error) => console.log(error));
var mydata;
function cacheData(d) {
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
}

function handleAdd(index) {
  var obj = {
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
}

const productContainer = document.getElementById("product-container");

function showData() {
  for (const data of vehicleData) {
    const div = document.createElement("div");
    div.classList.add("card", "bg-base-100", "shadow-xl");
    div.innerHTML = `
        <figure><img src="${
          data.image
        }" class="h-[170px] w-full" alt="product-img" /></figure>
        <div class="card-body">
          <div class="flex justify-between">

            <h2 class="card-title">${data.name}</h2>
            <button class="btn btn-outline btn-secondary btn-xs">${
              data.category
            }</button>

          </div>
          <p title="${data.description}">${
      data.description.slice(0, 80) + "..."
    }</p>
          <p>Price: $<span>${data.price}</span></p>
          <p>Quantity: <span>${data.quantity}</span></p>
          <div class="flex justify-between">
            <input type="number" placeholder="Enter quantity👍" class="input input-bordered input-primary w-[60%] quantity-input-field" />
            <button onclick="setItemToCart('${
              data.id
            }',this)" class="btn btn-primary w-[37%]" disabled>Buy Now</button>
          </div>
        </div>
        `;

    productContainer.appendChild(div);
  }
}
showData();

const quantityInputFields = document.getElementsByClassName(
  "quantity-input-field"
);

for (const input of quantityInputFields) {
  input.addEventListener("keyup", function (event) {
    const inputValue = event.target.value;
    const button = event.target.parentNode.children[1];
    console.log(button);

    if (inputValue === "") {
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled");
    }
  });
}


const cartItems = [];

function setItemToCart(id, button) {
  const selectedProduct = vehicleData.find((data) => data.id == id);

  const inputField = button.parentNode.children[0].value;
  const singleCartItem = {
    id: id,
    quantity: inputField,
    price: selectedProduct.price,
    image: selectedProduct.image,
  };

  cartItems.push(singleCartItem);
  showCart();
}

const promo = 'hero89'

// show cart items function
function showCart() {
    
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''

    let totalPrice = 0

  for (const item of cartItems) {
    totalPrice = totalPrice + parseInt(item.price)*parseInt(item.quantity)


    const div = document.createElement("div");
    div.classList.add(
        "flex",
        "justify-between",
        "border-2",
        "border-warning",
        "p-3",
        "shadow-md",
        "h-[120px]",
        "bg-black",
        "mb-2",
        "text-white"
      );
    div.innerHTML = `
        <div class="w-[30%]">
        <img src="${item.image}" class="w-full h-full" />
      </div>
      <div class="w-[60%]">
        <p>unit price:${item.price}</p>
        <p>quantity:${item.quantity}</p>
        <p>total price: ${parseInt(item.price)*parseInt(item.quantity)}</p>
        <button class="btn btn-error btn-xs ml-auto block">delete</button>
      </div>
        `;
        cartItemsContainer.appendChild(div)
  }

  const tax = totalPrice *0.25
  document.getElementById('total-cost').innerText = totalPrice;
  document.getElementById('tax').innerText = tax;
  document.getElementById('grand-total').innerText = totalPrice + tax;
}



//promo btn workddddddd
document.getElementById('promo-btn').addEventListener('click',function(){
    const promoField = document.getElementById("promo-input").value;
    if(promoField === promo){
        const gradTotal = document.getElementById('grand-total').innerText;
        const savings = parseFloat(gradTotal) * 0.05
        const newGrandTotal = parseFloat(gradTotal) - savings;
        document.getElementById('grand-total').innerText = newGrandTotal




        // document.getElementById('grand-total').innerText = gradTotal;
    }
})




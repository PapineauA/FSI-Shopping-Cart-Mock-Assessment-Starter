let quantity = 1;
let quantityDown = document.querySelector("#quantity-down");
let quantityUp = document.querySelector("#quantity-up");

function updateQuantity(displayQuantity) {
  let quantity = document.querySelector(".total-quantity");
  quantity.innerHTML = displayQuantity;
}

quantityDown.addEventListener("click", function (event) {
  if (quantity > 0) {
    quantity = quantity - 1;
  }
  updateQuantity(`Quantity: ${quantity}`);
});

quantityUp.addEventListener("click", function () {
  quantity = quantity + 1;
  updateQuantity(`Quantity: ${quantity}`);
});

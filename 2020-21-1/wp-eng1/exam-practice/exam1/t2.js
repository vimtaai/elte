function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

const data = document.querySelector("#data");

// Subtask 1+4
function handleProductClick() {
  const product = this;
  product.classList.toggle("product");
}
delegate(data, "click", ".shipment ul li", handleProductClick);

// Subtask 2+4
function handleArrivalClick() {
  const arrival = this;
  const shipment = arrival.parentNode;
  shipment.classList.toggle("arrival");
}
delegate(data, "click", ".shipment div:first-of-type", handleArrivalClick);

// Subtask 3+4
function handleShelfClick() {
  const shelf = this;
  const shipment = shelf.parentNode;
  shipment.classList.toggle("shelf");
}
delegate(data, "click", ".shipment div:last-of-type", handleShelfClick);
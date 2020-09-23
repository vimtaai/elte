function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

const table = document.querySelector("table");

function handleRowClick(event) {
  console.log(event.target);
  console.log(this);

  // event.target.style.backgroundColor = "red";
  if (this.style.backgroundColor !== "red") {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "";
  }
}

// table.addEventListener("click", handleRowClick);
delegate(table, "click", "tr", handleRowClick)
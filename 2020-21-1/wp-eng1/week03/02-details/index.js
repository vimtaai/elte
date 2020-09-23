function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

function handleDetailsClick(event) {
  console.log(event.target);
  console.log(this);
  // if (!event.target.matches(".details .summary")) {
  //   return;
  // }

  const paragraph = event.target.nextElementSibling;
  // if (getComputedStyle(paragraph).display === "none") {
  if (paragraph.style.display === "block") {
    paragraph.style.display = "none";
  } else {
    paragraph.style.display = "block";
  }
}

// window.addEventListener("click", handleDetailsClick);
delegate(document, "click", ".details .summary", handleDetailsClick);
const ul = document.querySelector("ul");

function handleListItemClick(event) {
  if (!event.target.matches("li")) {
    return;
  }

  const li = event.target;
  if (li.style.color === "red") {
    li.style.color = "black";
  } else {
    li.style.color = "red";
  }
}

ul.addEventListener("click", handleListItemClick);

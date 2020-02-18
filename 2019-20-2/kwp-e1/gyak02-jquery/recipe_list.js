const headers = document.querySelectorAll(".card-header");

function compareItems(descending = false) {
  return (a, b) => a.innerText < b.innerText
    ? (descending ? 1 : -1)
    : a.innerText > b.innerText
      ? (descending ? -1 : 1)
      : 0;
}

function handleHeaderClick(event) {
  const list = event.target.nextElementSibling;
  const descending = list.dataset.order === "descending";
  const listItems = Array.from(list.children);
  const sortedItems = listItems.sort(compareItems(descending));

  list.dataset.order = descending ? "ascending" : "descending";

  for (const item of sortedItems) {
    list.appendChild(item);
  }
}

for (const header of headers) {
  header.addEventListener("click", handleHeaderClick);
}
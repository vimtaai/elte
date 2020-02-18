// const headers = $(".card-header");

// function handleHeaderClick(event) {
// }

// headers.on("click", handleHeaderClick);

function compareItems(descending = false) {
  return (a, b) => a.innerText < b.innerText
    ? (descending ? 1 : -1)
    : a.innerText > b.innerText
      ? (descending ? -1 : 1)
      : 0;
}

$("body").on("click", ".card-header", function (e) {
  const list = $(this).siblings("ul")
  const descending = list.attr("data-order") === "descending";
  const listItems = list.children().sort(compareItems(descending));
  list.attr("data-order", descending ? "ascending" : "descending");
  list.append(listItems);
});
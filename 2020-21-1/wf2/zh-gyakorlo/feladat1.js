const button = document.querySelector("input[type=button]");

function handleButtonClick() {
  const text = button.value;
  console.log(text);
}

button.addEventListener("click", handleButtonClick);

const textarea = document.querySelector("#haiku-editor");
const numberofcharacters = document.querySelector("#number-of-characters");
const numberofrows = document.querySelector("#number-of-rows");
const vowelsperrow = document.querySelector("#vowels-per-row");
const button = document.querySelector("#btn-copy-haiku");
const haikus = document.querySelector("#haikus");

function countVowels(str) {
  const vowels = "aáeéiíoóöőuúüű";
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      c++;
    }
  }
  return c;
}

function renderVowelListItem(vowelCount) {
  return `<li>${vowelCount}</li>`;
}

function handleTextareaChange() {
  const text = textarea.value;
  console.log(text);

  numberofcharacters.innerHTML = text.length;

  // Soronként a szöveg
  let rows = text.split("\n");
  numberofrows.innerHTML = rows.length;

  console.log("Number of vowels in the first row:", countVowels(rows[0]));

  // Soronként a magánhangzók száma
  let rowsVowels = rows.map(countVowels);
  vowelsperrow.innerHTML = `
    ${rowsVowels.map(renderVowelListItem).join("\n")}
  `;

  // Ellenőrizzük, hogy Haiku-e
  const p = textarea.parentNode;
  if (
    rows.length === 3 &&
    rowsVowels[0] === 5 &&
    rowsVowels[1] === 7 &&
    rowsVowels[2] === 5
  ) {
    p.classList.add("haiku");
  } else {
    p.classList.remove("haiku");
  }
}

textarea.addEventListener("input", handleTextareaChange);

function handleButtonClick() {
  haikus.innerHTML += `
    <pre>${textarea.value}</pre>
  `;
}

button.addEventListener("click", handleButtonClick);
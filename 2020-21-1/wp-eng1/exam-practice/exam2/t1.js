const button = document.querySelector("button");

let div;

function handleButtonClick() {
  // Subtask 1
  if (div !== undefined) {
    return;
  }

  let headings = document.querySelectorAll("h1, h2, h3");
  let level = 1;

  let toc = document.createElement("ul");
  let lastLevel = toc;

  for (const heading of headings) {
    // Subtask 3
    let currentLevel = heading.tagName.slice(-1);
    while (currentLevel != level) {
      if (currentLevel > level) {
        let sublist = document.createElement("ul");
        lastLevel.lastChild.appendChild(sublist);
        lastLevel = sublist;
        level++;
      } else if (currentLevel < level) {
        lastLevel = lastLevel.parentNode;
        level--;
      }
    }

    // Subtask 2
    item = document.createElement("li");
    item.innerText = heading.innerText;
    
    lastParent = item;
    lastLevel.appendChild(item);
  }

  console.log(toc.outerHTML); // debug
  div = document.createElement("div");
  // Subtask 1
  div.appendChild(toc);
  button.insertAdjacentElement("beforebegin", div);
}

button.addEventListener("click", handleButtonClick);
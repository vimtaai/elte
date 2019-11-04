function delegate(parent, type, selector, fn) {
  function delegatedFunction(e) {
    if (e.target.matches(`${selector},${selector} *`)) {
      let target = e.target;
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      e.delegatedTarget = target;
      return fn(e);
      // vagy
      return fn.call(target, e);
    }
  }

  parent.addEventListener(type, delegatedFunction, false);
}

const ul = document.querySelector("ul");

const state = {
  children: [
    { value: "Elem 0", children: [], isOpen: true },
    { value: "Elem 1", children: [], isOpen: true },
    {
      value: "Elem 2",
      children: [
        { value: "Elem 2.0", children: [], isOpen: true },
        {
          value: "Elem 2.1",
          children: [{ value: "Elem 2.1.0", children: [], isOpen: true }],
          isOpen: true
        }
      ],
      isOpen: true
    },
    { value: "Elem 3", children: [], isOpen: true },
    {
      value: "Elem 4",
      children: [{ value: "Elem 4.0", children: [], isOpen: true }],
      isOpen: true
    }
  ]
};

function findElem(longId) {
  const ids = longId.split("-");

  let parent = state;
  let elem = state;
  for (const id of ids) {
    parent = elem.children;
    elem = elem.children[id];
  }

  return { parent, elem };
}

function handleLiClick(event) {
  const li = event.delegatedTarget;

  if (event.target !== li) {
    return;
  }

  const elem = findElem(li.dataset.id).elem;
  elem.isOpen = !elem.isOpen;

  render(state.children);
}
delegate(ul, "click", "li", handleLiClick);

function handleDeleteClick() {
  const li = event.delegatedTarget.parentNode;

  const { elem, parent } = findElem(li.dataset.id);
  parent.splice(parent.indexOf(elem), 1);

  render(state.children);
}
delegate(ul, "click", ".delete", handleDeleteClick);

function render(state) {
  ul.innerHTML = renderList(state);
}

function renderList(list, parentId = "") {
  let html = "";

  for (let i = 0; i < list.length; i++) {
    const elem = list[i];
    html += `<li data-id="${parentId}${i}">`;
    html += `<button class="toggle">${elem.isOpen ? "- " : "+ "}</button> `;
    html += elem.value;
    html += ` <button class="delete">X</button>`;
    if (elem.children.length > 0 && elem.isOpen) {
      html += "<ul>";
      html += renderList(elem.children, `${parentId}${i}-`);
      html += "</ul>";
    }
    html += "</li>";
  }

  return html;
}

render(state.children);

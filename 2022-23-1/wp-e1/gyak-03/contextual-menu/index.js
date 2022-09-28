import { menuItems } from "./menu.js";

const menuElement = document.querySelector("menu");

menuElement.addEventListener("click", onMenuItemClick);

function onMenuItemClick(event) {
    if (!event.target.matches("li")) {
        return;
    }

    const menuItemElement = event.target;
    console.log(menuItemElement.textContent);
}

window.addEventListener("contextmenu", onWindowRightClick);

function onWindowRightClick(event) {
    // console.log(event);
    event.preventDefault();
    console.log(event.pageX, event.pageY);

    menuElement.style.top = `${event.pageY}px`;
    menuElement.style.left = `${event.pageX}px`;

    menuElement.innerHTML = renderMenu(menuItems);
}

function renderMenu(menuItems) {
    return menuItems.map(renderMenuItem).join("\n");
}

function renderMenuItem(menuItem) {
    return `<li>${menuItem}</li>`;
}
import { renderPointerUpgrade } from "./template.js";

const state = {
	cookieCount: 0,
	isPointerAvailable: false,
	pointerCount: 0,
};

const cookieButtonElement = document.querySelector("#cookie");
const clickerOutputElement = document.querySelector("#clicker output");
const upgradesSectionElement = document.querySelector("#upgrades");

function onCookieButtonClick() {
	state.cookieCount += 1;

	if (state.cookieCount >= 10) {
		state.isPointerAvailable = true;
	}

	clickerOutputElement.textContent = `You have ${state.cookieCount} cookies.`;
	upgradesSectionElement.innerHTML = renderPointerUpgrade(state);
}

function onBuyUpgradeClick(event) {
	const target = event.target.closest("button.buy");

	if (!target) {
		return;
	}

	state.cookieCount -= 10;
	state.pointerCount += 1;

	clickerOutputElement.textContent = `You have ${state.cookieCount} cookies.`;
	upgradesSectionElement.innerHTML = renderPointerUpgrade(state);
}

cookieButtonElement.addEventListener("click", onCookieButtonClick);
upgradesSectionElement.addEventListener("click", onBuyUpgradeClick);

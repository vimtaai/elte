import { clickerOutputElement, upgradesSectionElement } from "./references.js";
import { state } from "./state.js";
import { renderCookieCount, renderUpgrades } from "./template.js";

export function onCookieButtonClick() {
  state.buyCookies();

  clickerOutputElement.textContent = renderCookieCount(state);
  upgradesSectionElement.innerHTML = renderUpgrades(state);
}

export function onBuyUpgradeClick(event) {
  const target = event.target.closest("button.buy");

  if (!target) {
    return;
  }

  const upgradeType = target.dataset.buy;
  state.buyUpgrade(upgradeType);

  clickerOutputElement.textContent = renderCookieCount(state);
  upgradesSectionElement.innerHTML = renderUpgrades(state);
}

export function onTimerTick() {
  state.addGeneratedCookies();

  clickerOutputElement.textContent = renderCookieCount(state);
  upgradesSectionElement.innerHTML = renderUpgrades(state);
}

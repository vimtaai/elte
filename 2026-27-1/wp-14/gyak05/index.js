import { onBuyUpgradeClick, onCookieButtonClick, onTimerTick } from "./events.js";
import { clickerOutputElement, cookieButtonElement, upgradesSectionElement } from "./references.js";
import { state } from "./state.js";
import { renderCookieCount } from "./template.js";

cookieButtonElement.addEventListener("click", onCookieButtonClick);
upgradesSectionElement.addEventListener("click", onBuyUpgradeClick);

setInterval(onTimerTick, 1000);

clickerOutputElement.textContent = renderCookieCount(state);

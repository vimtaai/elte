export function renderUpgrades(state) {
  const upgrades = Object.entries(state.upgrades);
  console.log(upgrades);

  return upgrades.map((entry) => renderUpgrade(entry, state.cookieCount)).join("\n");
}

export function renderUpgrade([type, upgrade], cookieCount) {
  const { isAvailable, count, icon, price } = upgrade;

  if (!isAvailable) {
    return "";
  }

  const isButtonDisabled = cookieCount < price;

  return `
    <div class="upgrade" id="${type}">
      <span>${icon.repeat(count)}</span>
      <button
        ${isButtonDisabled ? "disabled" : ""}
        data-buy="${type}"
        type="button"
        class="buy"
      >
        Buy ${icon} (${price} 🍪)
      </button>
    </div>
  `;
}

export function renderCookieCount(state) {
  const { cookieCount } = state;

  return `${cookieCount} 🍪`;
}

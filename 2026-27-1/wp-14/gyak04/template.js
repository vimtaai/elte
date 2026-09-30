export function renderPointerUpgrade(state) {
	const { isPointerAvailable, pointerCount } = state;

	if (!isPointerAvailable) {
		return "";
	}

	return `
    <div class="upgrade" id="pointers">
      <span>${"👆".repeat(pointerCount)}</span>
      <button type="button" class="buy">Buy (10 🍪)</button>
    </div>
  `;
}

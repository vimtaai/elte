export const state = {
  cookieCount: 0,
  upgrades: {
    pointers: { isAvailable: false, count: 0, price: 10, icon: "👆" },
    grandmas: { isAvailable: false, count: 0, price: 100, icon: "👵" },
  },

  buyCookies() {
    this.cookieCount += 1 + this.upgrades.pointers.count;

    if (this.cookieCount >= 10) {
      this.upgrades.pointers.isAvailable = true;
    }

    if (this.cookieCount >= 100) {
      this.upgrades.grandmas.isAvailable = true;
    }
  },

  buyUpgrade(type) {
    const upgrade = this.upgrades[type];

    if (this.cookieCount < upgrade.price) {
      return;
    }

    this.cookieCount -= upgrade.price;
    upgrade.count += 1;
  },

  addGeneratedCookies() {
    this.cookieCount += this.upgrades.grandmas.count;
  },
};

// function buyCookies() {
//   state.cookieCount += 1;

//   if (state.cookieCount >= 10) {
//     state.isPointerAvailable = true;
//   }
// }

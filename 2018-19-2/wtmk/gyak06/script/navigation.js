import { CAMERA } from "./pages/camera";
import { GALLERY } from "./pages/gallery";
import { drawer } from "./drawer";

export const Pages = {
  CAMERA,
  GALLERY
};

export function setDisplayMode(mode) {
  const selectors = Object.keys(mode);

  for (const selector of selectors) {
    const elem = document.querySelector(selector);
    elem.style.display = mode[selector] ? "block" : "none";
  }
}

// Oldal betöltése
export function navigate(newPage) {
  // Megkeressük az új oldal gyökérelemét
  const newPageRoot = document.querySelector(
    `section[data-page=${newPage.name}]`
  );

  // Minden oldalt elrejtek, kivéve azt, amire navigálok
  const pages = document.querySelectorAll("section[data-page]");

  for (const page of pages) {
    if (page === newPageRoot) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  }

  // Minden inicializálást elvégzünk az új oldalon
  newPage.init();
  setDisplayMode(newPage.displayModes.default);
  initNavigation(newPageRoot);
  drawer.close();
}

export function initNavigation(elem) {
  const links = elem.querySelectorAll("a[data-page]");

  for (const link of links) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const page = link.getAttribute("data-page");
      navigate(Pages[page]);
    });
  }
}

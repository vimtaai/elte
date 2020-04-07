const main = document.querySelector("main");

async function loadPage(page) {
  const response = await fetch(`pages/${page}.html`);

  if (!response.ok) {
    return;
  }

  const html = await response.text();

  main.innerHTML = html;

  (await import(`../pages/${page}.js`)).load();
}

function handleHashChange() {
  const page = location.href.split("#!/")[1] || "index";
  loadPage(page);
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", handleHashChange);

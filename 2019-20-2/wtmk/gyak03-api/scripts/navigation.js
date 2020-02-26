const main = document.querySelector("main");

function loadPage(page) {
    // Lekérdezés
    const pageContent = document.querySelector(`[data-page=${page}]`);
    // Betöltés az adott helyre
    main.innerHTML = pageContent.innerHTML;
}

function navigateTo(page) {
    location.href = `#!/${page}`;
}

function handleHashChange() {
    const page = location.href.split("/").pop();
    loadPage(page);
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", handleHashChange);

function handleLinkClick(event) {
    const a = event.target.closest("a");

    if (!a || !a.dataset.href) {
        return;
    }

    event.preventDefault();
    navigateTo(a.dataset.href);
}
window.addEventListener("click", handleLinkClick);

window.loadPage = loadPage;
window.navigateTo = navigateTo;
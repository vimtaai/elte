function delegal(szulo, esemeny, szelektor, esemenykezelo) {
    szulo.addEventListener(esemeny, function (event) {
        const targetElement = event.target.closest(szelektor)

        if (this.contains(targetElement)) {
            esemenykezelo.call(targetElement, event)
        }
    })
}

const graf = document.querySelector("svg")
const pontok = document.querySelectorAll("ellipse")
const hibaBekezdes = document.querySelector("p")

// Megoldás innentől
delegal(graf, "click", "ellipse", rakattintottamAzEllipszisre);

function rakattintottamAzEllipszisre() {
    vegyunkLeMindent();

    const ellipszis = this;
    console.log(ellipszis.dataset.name);
    console.log(ellipszis.dataset.paths);
    ellipszis.classList.add("aktualis");
    const elerhetoEllipszisek = ellipszis.dataset.paths.split(",");

    for (const elerhetoEllipszis of elerhetoEllipszisek) {
        const elem = document.querySelector(`[data-name="${elerhetoEllipszis}"]`)
        elem.classList.add("elerheto");
    }
}

function vegyunkLeMindent() {
    const aktualisElem = document.querySelector(".aktualis");
    const elerhetoElemek = document.querySelectorAll(".elerheto");

    aktualisElem?.classList.remove("aktualis");

    for (const elem of elerhetoElemek) {
        elem.classList.remove("elerheto");
    }
}


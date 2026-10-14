function veletlenKozott(alja, teteje) {
  return Math.floor(Math.random() * (teteje - alja) + alja);
}

const tablazatsor = document.querySelector("table tr");
const cellak = document.querySelector("#cellak");
const hatar = document.querySelector("#hatar");
const abrazolGomb = document.querySelector("#abrazol");
const szamolGomb = document.querySelector("#szamol");

// ========================================================
abrazolGomb.addEventListener("click", tablazatsorGeneralasB);

function tablazatsorGeneralas() {
  const cellakSzama = Number(cellak.value);

  let sor = "";
  for (let i = 0; i < cellakSzama; i += 1) {
    sor += "<td>0</td>";
  }
  tablazatsor.innerHTML = sor;
}

function tablazatsorGeneralasB() {
  const cellakSzama = Number(cellak.value);

  tablazatsor.innerHTML = [...Array(cellakSzama)].map(() => `
    <td>0</td>
  `).join("");
}

szamolGomb.addEventListener("click", veletlenszamokHozzaadasa);

function veletlenszamokHozzaadasa() {
  const tablazatCellak = tablazatsor.querySelectorAll("td");
  const felsoHatar = Number(hatar.value);
  let maximumSzam = -Infinity;

  for (const cella of tablazatCellak) {
    const szam = Number(cella.textContent);
    const ujSzam = szam + veletlenKozott(1, felsoHatar)

    if (ujSzam > maximumSzam) {
      maximumSzam = ujSzam;
    }

    cella.textContent = ujSzam;
  }

  console.log(maximumSzam);

  for (const cella of tablazatCellak) {
    const cellaertek = Number(cella.textContent);
    const vilagossag = (cellaertek * 100 / maximumSzam);
    const hatterszin = `hsl(10, 70%, ${vilagossag}%)`;
    cella.style.background = hatterszin;    
  }
}

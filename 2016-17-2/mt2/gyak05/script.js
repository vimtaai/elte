// Segédfüggvények
const $ = document.querySelector.bind(document);

// Állapottér
let store = {
    state: {

    },
    actions: {

    }
};

// Komponensek
function Game(board) {
    return board.map(row => Row(row)).join('');
}

function Row(row) {
    return `<tr>${row.map(cell => Cell(cell)).join('')}</tr>`;
}

function Cell(cell) {
    return `<td><button>a</button></td>`;
}

// Ikonok
// Bomba: 💣
// Zászló: 🚩
// Kérdőjel: ❔
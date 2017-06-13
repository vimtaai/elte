// Állapottér

const maxX = 3;
const maxY = 3;
const mixComplextity = 200;

let store = {
    state: {
        game: undefined,
        status: undefined,
        stepCount: undefined
    }, 
    actions: {
        init() {
            this.state.status = 'playing';
            this.state.stepCount = 0;
            this.state.game = [];
            for (let i = 0; i < maxX; i++) {
                this.state.game[i] = [];
                for (let j = 0; j < maxY; j++) {
                    this.state.game[i][j] = {
                        value: i * 3 + j,
                        x: i, 
                        y: j
                    }
                }                
            }
        },
        mix() {
            for (let i = 0; i < mixComplextity; i++) {
                const x = Math.floor(Math.random() * maxX);
                const y = Math.floor(Math.random() * maxY);
                this.callAction('moveTile', this.state.game[x][y]);
            }
            this.state.stepCount = 0;
        },
        moveTile(tile) {
            if (this.state.status == 'playing') {
                let done = false;
                for (let i = -1; i <= 1 && !done; i++) {
                    for (let j = -1; j <= 1 && !done; j++) {
                        const otherX = tile.x + i;
                        const otherY = tile.y + j;
                        if (i * j == 0 && i != j &&
                            otherX >= 0 && otherX < maxX && 
                            otherY >= 0 && otherY < maxY && 
                            this.state.game[tile.x + i][tile.y + j].value == 0) {
                                
                            otherValue = this.state.game[tile.x + i][tile.y + j].value;
                            this.state.game[tile.x + i][tile.y + j].value = tile.value;
                            tile.value = otherValue;
                            done = true;
                            this.state.stepCount += 1;
                        }
                    }
                }
            }
        },
        checkWin() {
            if (this.state.game.reduce((isWon, row) => row.reduce((isWon, tile) => (isWon && tile.value == tile.x * 3 + tile.y), isWon), true)) {
                this.callAction('win');
            }
        },
        win() {
            this.state.status = 'won';
        }
    },
    callAction(actionName, ...args) {
        if (this.actions.hasOwnProperty(actionName)) {
            this.actions[actionName].call(this, ...args);
        }
        // Újrarenderelés
        this.rootNode.innerHTML = '';
        this.rootNode.appendChild(App(this.state));
    },
    attach(rootSelector, rootComponent) {
        this.rootNode = document.querySelector(rootSelector, rootComponent);
        this.callAction();
    }
};

store.attach('#app', App);

// Komponensek

function App(state) {
    function clickNew() {
        store.callAction('init');
        store.callAction('mix');
    }

    return html`
        <div>
            <button id="newgame" onclick=${clickNew}>Új játék</button>
            <span id="stepcount">Eddigi lépések száma: ${state.stepCount}</span>
            <span id="gamestatus">
                ${state.status ? (
                    state.status == 'playing' ? html`Rakd ki az eredeti képet minél kevesebb lépésből!` : (
                        state.status == 'won' ? html`Gratulálok, nyertél!` : ''
                    )
                ) : 'Új játékhoz kattints az "új játék" gombra!'}
            </span>
            ${state.game ? Game(state.game) : ''}
        </div>
    `;
}

function Game(game) {
    return html`
        <table id="game">
            ${game.map(row => html`<tr>${row.map(Tile)}</tr>`)}
        </table>
    `;
}

function Tile(tile) {
    function clickTile() {
        store.callAction('moveTile', tile); 
        store.callAction('checkWin');
    }

    return html`
        <td class=${tile.value == 0 ? 'empty' : ''} onclick=${clickTile}>${tile.value == 0 ? '' : tile.value}</td>
    `;
}

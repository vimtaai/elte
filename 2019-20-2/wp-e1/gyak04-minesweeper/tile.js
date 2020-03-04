export const TileState = {
  REVEALED: "revealed",
  FLAG: "flag",
  UNREVEALED: "unrevealed"
};

export class Tile {
  isMine = false;
  state = TileState.UNREVEALED;
  coords = {};
  minesNearby = 0;

  constructor(x, y) {
    this.coords = { x, y };
  }
}
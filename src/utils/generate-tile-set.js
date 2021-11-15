import { TileValues } from "../constants/tile-values";


// Will eventually need arguments to determine the game type.
const generateTileSet = () => {
// Will generate the tile sets for a 4 player game of Riichi mahjong
let tileSet = [];
for (const [key, value] of Object.entries(TileValues)) {
    for (let i = 0; i < 4; i++) {
        tileSet = [...tileSet, {id: `${key}_${i}`, value: value}];
    }
}
return tileSet;
};

// This is written like ass
const getRandomHand = (tileSet) => {
    let wall = [...tileSet];
    let hand = [];
    for (let i = 0; i < 13; i++) {
        const foundTile = wall[Math.floor(Math.random() * wall.length)];
        hand.push(foundTile);
        wall = wall.filter((tile) => { return tile.id !== foundTile.id });
    }
    
    return hand;
}

export { generateTileSet };
import './Table.css';
import Rack from '../Rack/Rack';
import PlayerArea from '../PlayerArea/PlayerArea';

//going to host most test hands and all that here until I decide how I want to represent the game state


const Table = () => {
    return (
        <div className="table">
            <PlayerArea className="top-player" />
            <PlayerArea className="left-player" />
            <div className="center" >Center info</div>
            <PlayerArea className="right-player" />
            <PlayerArea className="bottom-player" />
            <div className="info-panel" >
                Info
            </div>
        </div>
    );
}

export default Table;

const bamboo = {
    tiles: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'],
    rotation: {x: 0, y: 0, z: 0}
}

const character = {
    tiles: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    rotation: {x: 0, y: 0, z: 0}
}

const dot = {
    tiles: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'],
    rotation: {x: 0, y: 0, z: 0}
}

const honors = {
    tiles: ['WE', 'WS', 'WW', 'WN', 'DR', 'DW', 'DG'],
    rotation: {x: 0, y: 0, z: 0}
}

const testHand = {
    tiles: ["B1", "B9", "D1", "D9", "C1", "C9", "DR", "DW", "DG", "WE", "WS", "WW", "WN"],
    rotation: {x: -20, y: 0, z: 0}
  };

  const singleTileHand = {
    tiles: ["B1"],
    rotation: {x: 0, y: 0, z: 0}
  }

  const testHand2 = {
    tiles: ["B1", "C1", "D1", "B2", "C2", "D2", "B3", "C3"],
    rotation: {x: -10, y: -10, z: 0}

  }
  const emptyHand = {
    tiles: [undefined, undefined, undefined, undefined],
    rotation: {x:-10, y:-3, z:-10},
  };
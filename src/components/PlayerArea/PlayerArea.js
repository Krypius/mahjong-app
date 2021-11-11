import './PlayerArea.css';
import Rack from '../Rack/Rack';

const PlayerArea = (props) => {
    return(
        <div className={props.className + " player-area"}>
            <div className="pond-and-hand" >
                {props.className === "bottom-player" ? <Rack hand={testHand} /> : "pond and hand"}
            </div>
            <div className="open-hand">open-hand</div>
        </div>
    );
}

export default PlayerArea;

const testHand = {
    tiles: ["B1", "B9", "D1", "D9", "C1", "C9", "DR", "DW", "DG", "WE", "WS", "WW", "WN"],
    rotation: {x: -20, y: 0, z: 0}
  };
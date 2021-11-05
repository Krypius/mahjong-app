import './Rack.css';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';

const Rack = ({hand}) => {
    const tiles = hand.tiles;
    const rotation = hand.rotation;
    //need to decide if a drawn tile is a part of your hand
    //also need to decide if the rack will handle the open and closed tiles of a hand, or if it will just hold closed tiles.

    return (
        <div className="rack">
            {tiles.map((tile, index) => {
                return <Tile key={index} type={tile} rotation={rotation}/>;
            })}
        </div>
    )
}

Rack.propTypes = {
    hand: PropTypes.exact({
        tiles: PropTypes.arrayOf(PropTypes.string),
        rotation: PropTypes.exact({
            x: PropTypes.number,
            y: PropTypes.number,
            z: PropTypes.number,
        })
    })
};

export default Rack;
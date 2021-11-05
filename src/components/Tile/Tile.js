import './Tile.css';
import PropTypes from 'prop-types';

/* Want to make a 'Tile options' object that will configure the look of the tile*/

const Tile = ({type, rotation}) => {
    
    const rotationStyle = {
        '--X': rotation.x,
        '--Y': rotation.y,
        '--Z': rotation.z,
    }

    return (
        <div className="tile" style={rotationStyle}>
            <div className="face front" style={type && {backgroundImage:`url(tile-faces/${type}.png)`}} />
            <div className="face side-horizontal" style={{'--right': 0}}/>
            <div className="face side-horizontal" style={{'--right': 1}}/>
            <div className="face side-vertical" style={{'--bottom': 0}}/>
            <div className="face side-vertical" style={{'--bottom': 1}}/>
            <div className="face back"/>
            {/* {horizontalStyle && <div className="face side-horizontal" style={horizontalStyle}/>}
            {verticalStyle && <div className="face side-vertical" style={verticalStyle} />} */}
        </div>
    )
}

Tile.propTypes = {
    type: PropTypes.string,
    rotation: PropTypes.exact({
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.number,
    }),
};

export default Tile;
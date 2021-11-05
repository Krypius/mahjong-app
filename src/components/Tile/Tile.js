import './Tile.css';
import PropTypes from 'prop-types';

/* Want to make a 'Tile options' object that will configure the look of the tile*/

const Tile = ({type, rotation}) => {
    
    const rotationStyle = {
        '--X': rotation.x,
        '--Y': rotation.y,
        '--Z': rotation.z,
    }

    const horizontalStyle = sideHorizonalStyle(rotation);
    const verticalStyle = sideVerticalStyle(rotation);

    return (
        <div className="tile" style={rotationStyle}>
            <div className="face front" style={{backgroundImage:`url(tile-faces/${type}.png)`}} />
            {horizontalStyle && <div className="face side-horizontal" style={horizontalStyle}/>}
            {verticalStyle && <div className="face side-vertical" style={verticalStyle} />}
        </div>
    )
}

const setStyles = (rotation) => {
    let styles = {};
    styles.rotation = {
        '--X': rotation.x,
        '--Y': rotation.y,
        '--Z': rotation.z,
    }

    // should we show left
    if(rotation.y > 0 || (rotation.z !== 0 && rotation.x < 0)) {
        styles.horizontal = { '--right': 0 };
    }

    
}

const sideHorizonalStyle = (rotation) => {
    //need to add in case when x and z rotation are not 0
    if(rotation.y === 0) return undefined;
    
    let right = 0;
    if(rotation.y < 0) {
        right = 1;
    }

    return {
        '--right' : right
    }
}

const sideVerticalStyle = (rotation) => {
    if(rotation.x === 0) return undefined;
    
    let bottom = 1;
    if(rotation.x < 0) {
        bottom = 0;
    }

    return {
        '--bottom' : bottom
    }
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
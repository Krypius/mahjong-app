import './Tile.css';
import PropTypes from 'prop-types';

/* Want to make a 'Tile options' object that will configure the look of the tile*/

const Tile = ({type, rotation, childrenNodes, className, nodeRef, ...props}) => {
    let rotationStyle = {};
    if(rotation) {
        rotationStyle = getRotationStyle(rotation.x, rotation.y, rotation.z);
    }

    return (
        <div ref={nodeRef} className={["tile-container", className].join(' ')} {...props}>
            <div className="tile" style={rotation && rotationStyle}>
                <div className="face front" style={type && {backgroundImage:`url(tile-faces/${type}.png)`}} />
                <div className="face side-horizontal" style={{'--right': 0}}/>
                <div className="face side-horizontal" style={{'--right': 1}}/>
                <div className="face side-vertical" style={{'--bottom': 0}}/>
                <div className="face side-vertical" style={{'--bottom': 1}}/>
                <div className="face back"/>
            </div>
            {childrenNodes}
        </div>
    )
};

const getRotationStyle = (x, y, z) => {
    const style = {};
    if(x) style['--X'] = x;
    if(y) style['--Y'] = y;
    if(z) style['--Z'] = z;
    return style;
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
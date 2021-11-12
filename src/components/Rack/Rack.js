import './Rack.css';
import '../../styles/ReactGridLayout.css';
import { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';
import {Responsive, WidthProvider} from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Rack = ({hand}) => {
    const tiles = hand.tiles;
    const rotation = hand.rotation;
    const [layouts, setLayouts] = useState(generateLayouts(hand));
    //need to decide if a drawn tile is a part of your hand
    //also need to decide if the rack will handle the open and closed tiles of a hand, or if it will just hold closed tiles.

    //need to write generateLayout function
    
    return (
        <ResponsiveGridLayout
        layouts={layouts}
        className="rack"
        measureBeforeMount={true}
        cols={{lg:13, md:13, sm:13, xs:13, xxs:13}}
        compactType="horizontal"
        margin={[0, 0]}
        isResizable={false} 
        autoSize={true}
        rowHeight={35}
        isBounded={true}>
        {tiles.map((tile, index) => {
            return( 
                <WrappedTile
                key={index}  
                type={tile} 
                rotation={rotation}/>
            );
        })}
        </ResponsiveGridLayout>
    )
}

const WrappedTile = forwardRef(({style, className, children, ...props}, ref) => {
    return (
        <Tile style={{...style}} className={className} nodeRef={ref} {...props} childrenNodes={children}/>
    )
});

const generateLayouts = (hand) => {
    let layout = [];
    hand.tiles.forEach((_, i) => {
        layout.push({
            i: i.toString(),
            x: i,
            y: 0,
            h: 1,
            w: 1
        });
    });
    
    const layouts = {lg: layout, md: layout, sm: layout, xs: layout, xxs: layout};
    return layouts;
};

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
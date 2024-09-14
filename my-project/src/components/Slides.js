import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Sprite from "./sprite.jpeg" ;

const handleDragStart = (e) => e.preventDefault();

function Slides() {
    const items = [
        <img src= {Sprite} onDragStart={handleDragStart} role="presentation" />,
        <img src={Sprite} onDragStart={handleDragStart} role="presentation" />,
        <img src={Sprite} onDragStart={handleDragStart} role="presentation" />,
    ];
    const Gallery = () => <AliceCarousel mouseTracking items={items} />;
    return (
        <div>
            <Gallery/>
        </div>
    )


}

export default Slides; 
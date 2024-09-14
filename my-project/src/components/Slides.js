import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Sprite from "./sprite.jpeg" ;
import { useState } from 'react';
import ReactPlayer from 'react-player'

const handleDragStart = (e) => e.preventDefault();

function Slides() {
    const [choreo, setChoreo] = useState([
        {url: "https://www.youtube.com/watch?v=xtPkHihj7Ho"},
        {url: "https://www.youtube.com/watch?v=09ABiCrGMXw"},
        {url: "https://www.youtube.com/watch?v=09ABiCrGMXw"},
        {url: "https://www.youtube.com/watch?v=09ABiCrGMXw"},
    ]);

    const items = () => choreo.map((json) => {return (<ReactPlayer
        url={json.url}
        controls={true} // to show video controls like play, pause, etc.
        width="100%" // you can customize width and height
        height="400px"
      />)});
        
    const Gallery = () => <AliceCarousel mouseTracking items={items()} />;
    return (
        <div>
            <Gallery/>
        </div>
    )


}

export default Slides; 
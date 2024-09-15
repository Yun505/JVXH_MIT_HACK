import {useEffect, React, useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useState } from 'react';
import ReactPlayer from 'react-player'
import data from './List.json';

function Slides(data) {
    
    
    const [choreo, setChoreo] = useState([]);
    const [play, setPlay] = useState(null);

    useEffect(() => {
        fetch("List.json")
            .then(response => response.json()
            )
            .then((json) => {console.log(json['videos']); setChoreo(json['videos']); console.log(choreo)})

            
    }, [])

    const items = () => choreo.map((json, key) => {return (<div className="pointer-events-none"><ReactPlayer
        url={json.url}
        controls={true} // to show video controls like play, pause, etc.
        width="100%" // you can customize width and height
        height="400px"
        id={key}
        playing={key === play}
      /></div>)});

    const Gallery = () => <AliceCarousel key="carousel" activeIndex={play} onSlideChanged={(event) => setTimeout(() => setPlay(event.item), "50")} mouseTracking mouseDragEnabled touchTracking disableButtonsControls touchMoveDefaultEvents infinite items={items()} />;
    return (
        <div>
            <Gallery/>
        </div>
    )


}

export default Slides; 
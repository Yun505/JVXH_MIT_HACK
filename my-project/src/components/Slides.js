import {useEffect, React} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useState } from 'react';
import ReactPlayer from 'react-player'
import data from './List.json';

const handleDragStart = (e) => e.preventDefault();

function Slides(data) {
    
    
    const [choreo, setChoreo] = useState([
    
    ]);

    useEffect(() => {
        fetch("List.json")
            .then(response => response.json()
            )
            .then((json) => {console.log(json['videos']); setChoreo(json['videos']); console.log(choreo)})

            
    }, [])

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
import {useEffect, React} from 'react'
import '../video_scroll.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useState } from 'react';
import ReactPlayer from 'react-player'
import data from './List.json';
import VideoElement from './VideoElement';

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

    const items = () => choreo.map((json) => {return (<VideoElement videoUrl={json.url}/>)});
        
    return (
        <div id="custom-scrollbar" class="overflow-x-auto flex flex-row flex-shrink-0 gap-6">
            {items()}
        </div>
    )


}

export default Slides; 
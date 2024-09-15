import React from "react";
import ReactPlayer from 'react-player';


export const AMove = ({
  link}) => {
    function drag(ev) {
      console.log("dragging");
      console.log(link)
      ev.dataTransfer.setData("text", link);
    }
    
  return <div class="w-5/12 mb-5 bg-gray-400 m-1.5" draggable="true" onDragStart={drag} >
                  <ReactPlayer
                url={link}
                controls={false} // to show video controls like play, pause, etc.
                width="100%" // you can customize width and height
                height="auto"
                loop={true}
                volume={0}
                muted={true}
                playing={true}
        /></div>
};

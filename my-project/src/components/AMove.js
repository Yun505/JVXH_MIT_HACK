import React from "react";
import ReactPlayer from 'react-player';

export const AMove = ({
  link}) => {
  return <div class="w-5/12 mb-5 bg-gray-400 m-1.5">
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

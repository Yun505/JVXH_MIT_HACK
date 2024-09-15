import React from 'react';
import ReactPlayer from 'react-player';

const VideoElement = ({ videoUrl }) => {
  return (
    <div className="flex flex-col w-5/12">
      {/* Video Player */}
      <div className="p-4">
      <ReactPlayer
        url={videoUrl}
        controls={false} // to show video controls like play, pause, etc.
        width="100%" // you can customize width and height
        loop={true}
        volume={0}
        muted={true}
        playing={true}
/>
      </div>
      <div className="p-4"> 
        <textarea className="p-2 text-base box-border text-black"
          placeholder='Enter your text here...' 
        />
      </div>
    </div>
  );
};

export default VideoElement;

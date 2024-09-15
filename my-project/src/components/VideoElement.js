import React from 'react';
import ReactPlayer from 'react-player';

const VideoElement = ({ videoUrl }) => {
    if(videoUrl=="blank-blank")
    {
        return (
            <div className="flex flex-col w-5/12">
              {/* Video Player */}
              <div className="p-4">
              <div className={"h-[360px]"} ondrop="drop(event)" ondragover="allowDrop(event)"></div>
              </div>
              <div className="p-4"> 
                <textarea className="p-2 text-base box-border text-black"
                  placeholder='Enter your text here...' 
                />
              </div>
            </div>
          );
    }
    else
    {
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
    }
 
};

export default VideoElement;

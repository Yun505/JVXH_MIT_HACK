import ReactPlayer from 'react-player';
import {useEffect, useState, React} from 'react'

const VideoElement = ({ videoUrl }) => {
 const[link, setLink] = useState(videoUrl);
    function allowDrop(ev) {
        ev.preventDefault();
      }
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log("dropped")
        console.log(data);
        setLink(data);
      }
    if(link=="blank-blank")
    {
        return (
            <div className="flex flex-col" onDrop={drop} onDragOver={allowDrop}>
              {/* Video Player */}
              <div className="p-4">
              <div className={"h-[360px] bg-slate-300"} ondrop="drop(event)" ondragover="allowDrop(event)"></div>
              </div>
              <div className="p-4"> 
              <textarea class="text-sm text-black border rounded-lg p-2  dark:bg-[#121A2F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brainstorm description here..."></textarea>
              </div>
            </div>
          );
    }
    else
    {
        return (
            <div className="flex flex-col">
              {/* Video Player */}
              <div className="p-4">
              <ReactPlayer
                url={link}
                controls={false} // to show video controls like play, pause, etc.
                width="100%" // you can customize width and height
                
                loop={true}
                volume={0}
                muted={true}
                playing={true}
        />
              </div>
              <div className="p-4"> 
              <textarea class="text-sm text-black border rounded-lg p-2  dark:bg-[#121A2F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brainstorm description here..."></textarea>
              </div>
            </div>
          );
    }
 
};

export default VideoElement;

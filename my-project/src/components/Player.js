import '../App.css';
import Upload from './Upload.js';
import ReactPlayer from 'react-player'
import 'boxicons'
import { Button, useState } from 'react';


function Player(props, song_name, song_genre, ) {
  const [pause, setPause] = useState(true);
  const [speed, setSpeed] = useState(1);

  return (
    <div>
      <div>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          playing={pause}
          playbackRate={speed}
          width="100%"
        />
      </div>

      <div className="flex justify-between my-5">
        <div className="px-4 py-2 bg-blue-500 text-white rounded"><button onClick={() => setSpeed(Math.max(0.25, speed - 0.25))}>Slow</button></div>
        
        <div className="px-4 py-2 bg-blue-500 text-white rounded"><button onClick={() => setPause(!pause)}>Pause/Play</button></div>

        <div className="px-4 py-2 bg-blue-500 text-white rounded"><button onClick={() => setSpeed(Math.min(3, speed + 0.25))}>Fast</button></div>

        <Upload />
      </div>

      
      
    </div>

  );
}

export default Player;

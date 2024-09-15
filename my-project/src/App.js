import './App.css';
import Player from "./components/Player.js"
import Moves from './components/Moves.js';
import Slides from './components/Slides.js';
import React, { useRef, useState } from 'react';

function App() {
   // Create a ref for the container that holds textareas
   const containerRef = useRef(null);
  const [genLink, setGenLink] = useState(null)
   // Function to handle button click
   const handleButtonClick = () => {
     if (!containerRef.current) return;
 
     // Find all textarea elements within the container
     const textareas = containerRef.current.querySelectorAll('textarea');
     
     // Collect text from all textareas
     const textareasText = Array.from(textareas).map(textarea => textarea.value);
     const sanitizedText = textareasText.toString().replace(/\n/g, ",");
     let url = "http://localhost:8000/suno/"+sanitizedText;
        fetch(url)
        .then(response => (response.json()))
        .then(data => setGenLink(data.message))
  
     alert('Text from textareas: \n' + textareasText.join('\n'));
   };
 
  return (
    <div class="text-white"ref={containerRef}>
      <div class="text-2xl h-12 pl-5 text-justify p-2 bg-[#CE8397] font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight"> MoveMatic</div>
      <div class="grid grid-cols-3 w-full min-h-screen">
        <div class="col-span-2 bg-[#121A2F]">
          <div class=" p-4">
          {/* <input type="text" id="input-group-1" class="text-lg border rounded-lg block w-1/5 ps-3 p-3  dark:bg-[#121A2F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="project name"></input> */}
          </div>
          <div class="p-4">
            <Slides/>
            <button onClick={handleButtonClick}>Collect textareas and generate button!</button>
            {genLink && (<video controls={true} autoplay="" name="media"><source src={genLink}/></video>)}
          </div>
          {/* <div class="p-4">
            <Player />
          </div> */}
      </div>

      <div class="col-span-1 bg-[#1A2335] p-4">
          <p>Moves</p>
          <div class="overflow-scroll
                w-full mx-200 h-screen text-justify">
          <Moves />
          </div>
        </div>
      </div>


    </div>


  );
}

export default App;
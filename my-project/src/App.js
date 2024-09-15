import './App.css';
import Player from "./components/Player.js"
import Moves from './components/Moves.js';
import Slides from './components/Slides.js';

function App() {
  return (
    <div class="text-white">
      <div class="text-2xl h-12 pl-5 text-justify p-2 bg-[#CE8397] font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight"> MoveMatic</div>
      <div class="grid grid-cols-3 w-full min-h-screen">
        <div class="col-span-2 bg-[#121A2F]">
          <div class=" p-4 mb-6">
          <input type="text" id="input-group-1" class="text-lg border rounded-lg block w-1/5 ps-3 p-3  dark:bg-[#121A2F] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="project name"></input>
          </div>
          <div class="p-4">
            <Slides/>
          </div>
          <div class="p-4">
            <Player />
          </div>
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

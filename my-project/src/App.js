import './App.css';
import Player from "./components/Player.js"
import Moves from './components/Moves.js';

function App() {
  return (
    <div class="text-white">
      <div class="bg-[#CE8397]">Title</div>
      <div class="grid grid-cols-3 w-full min-h-screen">
        <div class="col-span-2 bg-[#121A2F]">
          <div class=" p-4">
            <p>Song Name genre</p>
          </div>
          <div class="p-4">
            <p>Moving slides</p>
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

import './App.css';
import Player from "./components/Player.js"
import Slides from './components/Slides.js';

function App() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-4 w-full min-h-screen">
       

        <div class="space-y-4">
          <div class="bg-green-100 p-4">
            <p>Song Name genre</p>
          </div>
          <div class="bg-green-100 p-4">
            <p>Moving slides</p>
            <Slides/>
          </div>
          <div class="bg-green-100 p-4">
            <Player />
          </div>
        </div>
        <div class="bg-blue-100 p-4">
          <p>Moves</p>
        </div>
      </div>


    </div>


  );
}

export default App;
import './App.css';
import Player from "./components/Player.js"

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
          </div>
          <div class="bg-green-100 p-4">
            <p>Player</p>
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

import '../App.css';
import { useState } from 'react';
import { AMove } from './AMove.js';

function Moves() {

  const allmoves = [1,2,3,4,5,6,7,8,9,10,11,12];

  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  return (
    <div className="grid grid-rows-10 gap-x-4">
      <div class="row-span-9 flex flex-wrap">
        {allmoves.map((n) => {
          return <AMove number={n}/>
        })}
      </div>
    </div>

  );
}

export default Moves;

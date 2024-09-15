import '../App.css';
import { useState } from 'react';
import { AMove } from './AMove.js';

function Moves(props) {
  const allmoves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [searchInput, setSearchInput] = useState(""); 
  const [filteredData, setFilteredData] = useState(allmoves); 

  // Handles the change in search input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handles the search button click
  const handleSearch = () => {
    const filtered = allmoves.filter((move) => {
      if (searchInput === '') {
        return true; // Return all moves if no input
      } else {
        return move.toString().includes(searchInput);
      }
    });
    setFilteredData(filtered); // Update the filteredData state
  };

  return (
    <div>
      {/* Search bar with text color fix */}
      <div className="sticky top-0 z-10 p-4 flex space-x-2">
        <input
          type="text"
          placeholder="Search moves..."
          value={searchInput}
          onChange={handleChange}
          className="p-2 border rounded w-full text-black bg-white"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABLtJREFUaEPtmWnIlUUUx38m2qoFRRaVhmUWYQQRfmgjK/1QKW1WWGGlmWREQhSVZlq5FFoUiWh72m7QohZkFmZIhR+KpH39UKhlqW2UNn+ZgcP0LDPPfV+6L7wHLpfnPmf+M/+ZM2e7Peji0qOLr59uAv/3CbZyArsBZwPnAkcC+/mPOG30n/XAC8CrwB+dQbYJgX7AHcAYYPfERf0GPA5MBTYkjklSyyUwHbgB0O43ERGZ6Tegyfj/jEklsC+w3JnC8R0yK7wJnAP80ipeCoGj/OIHFEz2M/AS8CzwJfC91zkYOBw4HxgF7FMw9jPgdODbVkjUETgIWAvo28pX3hQeAf6uWcCuwJXuEt8EHBLpisRQQBvRSKoI9HU7tNp5kSER8nPAJcBfmTPuATwDnBWNexc4FfgzE2+nehWBB5zHuCYCnQPc2GQiM2Y+cHWEcbt7ntYEt4zAoW6XPwd6GlD5c9l0LNq9C93u6q7otP4BPvafxf4U7ZhdgGXACPPjNqA/8FMuiTICS4CLDdgX/lJa/L2Ax3wgq5pXJMa7k/vdKMk8hangF2QeMLkjCCg4bQZ6G7DzgKUR+EXAU4kTyhGcGF34icCDZryi9/7AjkTM0jsw2l+2gCNzOLoE9JaMoKQgeFuEo6hsT+GkApOr5FNkQk/6NCEMnOFTgDKgu505XApMAN7xSicDuqza0SDaWQXCD8xvD7k4cIV5znYSRQTeB44zoCcAa2qOVZF6U6SjYPZhFMQWAlcZvQt8EAw/6XKf2aoJKTLagCOP9E0OqNG93HmXh83z28Ap5vlYF6nXmeePCuJOtgkpQPUyo/YElIQ1EZ3Cd2bgj8AB5lkpho3CvwJ750xUZEJbALnIIH2ArTmgGbqaR/MF0UZpw5KliIDyEyViQQb5oJYMmqF4hIs3nxh9mapMNlmKCMhO5c6CnAasTEbMUzwDeN0MkQPJStmLCCyIPEW2a8vgMNfVBNcb/UU+aidDFBFQtviyQZBJ6ag7Q5SWW5NRrqWcK1mKCCiFkGdQ+htE/vr5ZNQ0xct8LhW0dZnlobI8XlkyJ98tHx5E1dZhaetK0tLmKNs90GjP9kVPEkBQKiMg/61F23igQkZ5UquiOVWG2sJmO6CSNZSkyXNUFTT3OlO6LkJSO2VKMnqx4v2uZzQpenUXoMQwW6oIKMgoOTsmQn00Mq/USWU2Sr9HRgOqst1a7LqiXpfqPUAmZUX2e6e7F0/4CqxqIhX143wpGhf1GqcsdaxvfNUuOFaoIyB9tQ1f8yVfPF4Z6IveQ33tbViYWqgieGirqAKrE6XV6nJkSQoBAaroeMW3QLImKFFW9B1e8C6bRCqBMJeKm1tbYKBO3LXe9Ia5lOWNAiz1kGwKXjldLgGBqck1y/eGUrmogL/PBy6lzEHUmVjRCokmBMJ8Snvly9VSGQioKpOpqa3yg78Pq7zpKUkrkzh1CXrqZCg36vATqMNs8l6uVV0P24dK8k6tnECThVaNkcd6OpdEOxEQOf1poq5ILIOBT4vYtxuBQEIBMqxNf6jcU3Z07UhAa1U8UM9I/+bcXGV37UpAa1b75a26i9bOBOrWvvN9N4GkbepEpe4T6MTNTYLu8ifwL4fTvzHYtrZPAAAAAElFTkSuQmCC"/>
        </button>
      </div>

      {/* Grid for moves */}
      <div className="grid grid-rows-10 gap-x-4">
        <div className="row-span-9 flex flex-wrap">
          {filteredData.map((move) => (
            <AMove key={move} number={move} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moves;

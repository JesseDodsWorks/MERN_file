import React, {useState, useEffect} from "react";

import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => setPokemon(response.results))
    }, []);

  return (
    <div>
      {pokemon.map((value, index) => {
        return (
          <p key={index}> {value.name} </p>
        )
      })}
    </div>
  );
}

export default App;

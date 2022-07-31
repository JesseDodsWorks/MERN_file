import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
      // .then(response => {console.log(response)})
      .then(response=>{setPokemon(response.data.results)})
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
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                setPokemon(response.data.results);
            }).catch(err=>{
                console.log(err);
            });
    }

    return (
        <div className="App">
            <button onClick={getPokemon}>Get Pokémon Axios Style</button>
            <ul>
            {pokemon.map((pokemonster, i) => {
                return <li key={i}>{pokemonster.name}</li>
            })}
            </ul>
        </div>
  );
}

export default App;

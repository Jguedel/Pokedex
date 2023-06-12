import "./App.css";
import Dex from "./Info.js";
import Card from "./Card.js";
function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <div className="cards">
        {Dex.map((pokemon, i) => {
          return (
            <Card
              key={i}
              name={pokemon.name}
              type={pokemon.type}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              exp={pokemon.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

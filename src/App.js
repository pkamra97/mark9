import { useState } from "react";
import "./styles.css";

const movieDatabase = {
  Scifi: [
    {
      name: "Avatar",
      imdb: "7.8"
    },
    {
      name: "Interstellar",
      imdb: "8.6"
    },
    {
      name: "Tenet",
      imdb: "7.3"
    },
    {
      name: "inception",
      imdb: "7.5"
    }
  ],

  Action: [
    {
      name: "The gray man",
      imdb: "6.5"
    },
    {
      name: "RRR",
      imdb: "8.1"
    },
    {
      name: "Top Gun Maverick",
      imdb: "8.4"
    },
    {
      name: "King's Man",
      imdb: "6.5"
    }
  ],
  Superhero: [
    {
      name: "Avengers:Endgame",
      imdb: "8.5"
    },
    {
      name: "Avengers:Infinity War",
      imdb: "8.4"
    },
    {
      name: "Captain America:Civil War",
      imdb: "7.8"
    },
    {
      name: "Captain America:The Winter Soldier",
      imdb: "7.7"
    }
  ]
};

export default function App() {
  const [currCategory, setcurrCategory] = useState("Scifi");

  function movieClickHandler(genre) {
    setcurrCategory(genre);
  }

  return (
    <div className="App">
      <h1>Movie Recommender</h1>
      <h2>Check my top Movie Recommendations</h2>
      <hr />
      <div>
        {Object.keys(movieDatabase).map((genre) => (
          <button key={genre} onClick={() => movieClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="movieList">
        <ul>
          {movieDatabase[currCategory].map((item) => (
            <li key={item.name}>
              <div className="food-name">{item.name}</div>
              <br />
              <div style={{ fontSize: "small" }}>IMDB: {item.imdb}</div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

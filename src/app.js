import {useState, useEffect} from "react";
// import logo from "./logo.svg";
import "./style.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
  <div>
    <div>
    <img src="https://i.imgur.com/yNLHX82.png" title="source: imgur.com" />
    </div>

    <br/>

    <div id="search">
      <Form moviesearch={getMovie} />
    </div>

    <br/>
      
    <div className="card">
        <MovieDisplay movie={movie} />
    </div>

    <div>
    <a href="https://github.com/mmillerks"><img src="https://i.imgur.com/35WrE4f.png" title="source: imgur.com" id="profilePic"/></a>
    </div>

  </div>
  );
}
;
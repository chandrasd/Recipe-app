import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "38a8ad8c";
  const APP_KEY = "e407f12584c88a55d3eed18b40a12458";
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has been run");
  }, [counter]);
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;

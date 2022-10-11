import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [number, setNumber] = useState("");
  const handleClick = (e) => {
    getQuotes(e);
  };
  const getQuotes = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <h2>Number of quotes</h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </form>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Get Quotes
      </button>
      <div>{quotes}</div>
    </div>
  );
}

export default App;

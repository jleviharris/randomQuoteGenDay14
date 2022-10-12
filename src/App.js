import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";

function App() {
  const url = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([]);
  const [number, setNumber] = useState("");
  const handleClick = (e) => {
    getQuotes(e);
  };
  const getQuotes = (e) => {
    e.preventDefault();
    if (number === "0") {
      alert("Please enter a number");
    } else {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          data = shuffle(data);
          let output = [];
          for (let i = 0; i < data.length; i++) {
            if (i == number) {
              break;
            }
            output.push([data[i].text, data[i].author]);
          }
          setQuotes(output);
        });
      console.log(quotes);
    }

    console.log(number);
  };
  function shuffle(quotes) {
    let CI = quotes.length,
      tempValue,
      randomIndex;

    // While elements exist in the array
    while (CI > 0) {
      randomIndex = Math.floor(Math.random() * CI);
      // DECREASE CI BY 1
      CI--;
      // SWAP THE LAST ELEMENT WITH CI
      tempValue = quotes[CI];
      quotes[CI] = quotes[randomIndex];
      quotes[randomIndex] = tempValue;
    }
    return quotes;
  }

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
      <div>
        {quotes.map((quote, index) => {
          return (
            <div key={index} className="singleQuote">
              <div className="quote"> {quote[0]}</div>
              <div className="author">~ {quote[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

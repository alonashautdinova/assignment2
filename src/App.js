import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    const script = document.createElement("script");
    script.src =
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=handleQuoteResponse";
    document.body.appendChild(script);
  };

  window.handleQuoteResponse = (data) => {
    setQuote(data.quoteText);
    setAuthor(data.quoteAuthor);
  };

  return (
    <div className="quote-container">
      <h1>Quote Generator</h1>
      <span className="quoteContent">
        <p>"{quote}"</p>
        {author && (
          <p>
            <strong>{author}</strong>
          </p>
        )}
      </span>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;

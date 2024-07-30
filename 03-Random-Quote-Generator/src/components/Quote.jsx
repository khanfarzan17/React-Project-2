import { useState, useCallback } from "react";
import quotes from "../Data/data";
import "../styles/Quote.css";

const Quote = () => {
  const [quotee, setQuotee] = useState(quotes[0] || {});

  const handleNext = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuotee(quotes[randomIndex]);
  }, []);

  return (
    <div className="container">
      <h1 className="heading-1">{quotee.quote}</h1>
      <h3 className="heading-2">Author: {quotee.author}</h3>
      <button className="button" onClick={handleNext}>
        Next Quote
      </button>
    </div>
  );
};

export default Quote;

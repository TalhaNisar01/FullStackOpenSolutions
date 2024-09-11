import { useState } from 'react';

const App = () => {
  // Save the count of feedback for each category
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handler functions to update the state for each feedback category
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* Buttons to give feedback */}
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Statistics</h2>
      {/* Display feedback counts */}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
    </div>
  );
};

export default App;

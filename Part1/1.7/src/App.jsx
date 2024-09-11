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

  // Total feedback count
  const totalFeedback = good + neutral + bad;

  // Average score calculation
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;

  // Percentage of positive feedback (good feedback)
  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* Buttons to give feedback */}
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Statistics</h2>
      {/* Display feedback counts and additional statistics */}
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Average: {averageScore}</p>
          <p>Positive: {positivePercentage.toFixed(2)} %</p>
        </div>
      )}
    </div>
  );
};

export default App;

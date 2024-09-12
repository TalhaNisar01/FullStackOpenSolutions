const Statistics = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;
  
    // Calculating average score and percentage of positive feedback
    const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
    const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  
    if (totalFeedback === 0) {
      return <p>No feedback given</p>;
    }
  
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Average: {averageScore.toFixed(2)}</p>
        <p>Positive: {positivePercentage.toFixed(2)} %</p>
      </div>
    );
  };
  
  export default Statistics;
  
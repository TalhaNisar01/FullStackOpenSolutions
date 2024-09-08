import React from 'react';

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return <p>Total number of exercises {total}</p>;
};

export default Total;

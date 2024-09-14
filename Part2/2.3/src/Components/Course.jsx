import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  // Calculate the sum of exercises using reduce
  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('Current sum:', sum);
    console.log('Current part:', part);
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default Course;

import React from 'react';

// Header component
const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>;
};

// Part component
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// Content component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

// Total component
const Total = ({ total }) => {
  return <p><strong>Total of {total} exercises</strong></p>;
};

// Main Course component
const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default Course;

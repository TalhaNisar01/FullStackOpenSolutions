
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={totalExercises} />
    </div>
  )
}

export default App

























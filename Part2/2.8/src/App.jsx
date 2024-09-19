import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Handler for name input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Handler for number input changes
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // Handler for form submission
  const addPerson = (event) => {
    event.preventDefault()

    // Check if the name already exists in the persons array
    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      // Create a new person object with both name and number
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson)) // Add the new person
      setNewName('') // Clear name input
      setNewNumber('') // Clear number input
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

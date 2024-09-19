import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Handler for input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Handler for form submission
  const addPerson = (event) => {
    event.preventDefault()

    // Check if the name already exists in the persons array
    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      // Show an alert if the name already exists
      alert(`${newName} is already added to the phonebook`)
    } else {
      // Otherwise, add the new person to the phonebook
      const newPerson = {
        name: newName
      }

      setPersons(persons.concat(newPerson)) // Add new person
      setNewName('') // Clear input
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
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

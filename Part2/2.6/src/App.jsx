import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Handler for input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value) // update the newName state when input changes
  }

  // Handler for form submission
  const addPerson = (event) => {
    event.preventDefault() // prevent form from refreshing the page
    
    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson)) // add new person to the persons list
    setNewName('') // clear the input after submission
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

      {/* Debugging purposes */}
      <div>debug: {newName}</div>

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

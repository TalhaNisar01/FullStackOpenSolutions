import React from 'react'
import axios from 'axios'

const Persons = ({ personsToShow }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(() => {
          // Remove the deleted person from the UI
          // You might want to also update the state to reflect the change
          // This is a simple approach
          window.location.reload()
        })
        .catch(error => {
          console.error('Error deleting person:', error)
        })
    }
  }

  return (
    <div>
      {personsToShow.map(person => 
        <div key={person.id}>
          <span>{person.name} {person.number}</span>
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons

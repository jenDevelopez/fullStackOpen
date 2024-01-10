import  { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = () => {
    const newPerson = {
      name: newName
    }

    const personExist = persons.some(person => person.name === newPerson.name)

    if(!personExist){
      setPersons(persons.concat(newPerson))
    }else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  


  const handleSubmit = e => {
    e.preventDefault()
    addPerson()
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input 
          onChange={(e) => setNewName(e.target.value)}
          value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
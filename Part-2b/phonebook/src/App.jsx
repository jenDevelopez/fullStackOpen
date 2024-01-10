import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("")
  const [query, setQuery] = useState("")
  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newPhoneNumber
    };

    const personExist = persons.some(
      (person) => person.name === newPerson.name
    );

    if (!personExist) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson();
    setNewName("");
    setNewPhoneNumber("")
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().match(query.toLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with 
        <input type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input 
            onChange={(e) => setNewName(e.target.value)} 
            value={newName} />
         
        </div>
        <div>
          number:
          <input
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            value={newPhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            <p>
              {person.name}
              <span> {person.number}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

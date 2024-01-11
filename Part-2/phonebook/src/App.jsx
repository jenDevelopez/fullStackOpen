import { useEffect, useState } from "react";
import personService from './services/persons'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [query, setQuery] = useState("");
  
  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    };
    const personExist = persons.some(
      (person) => person.name === newPerson.name
    );

    if (!personExist) {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewPhoneNumber('')
        })
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson();
    setNewName("");
    setNewPhoneNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().match(query.toLowerCase())
  );

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} setQuery={setQuery} />
      <h3>add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;

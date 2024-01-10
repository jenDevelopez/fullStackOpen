import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

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
      setPersons(persons.concat(newPerson));
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

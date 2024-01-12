import { useEffect, useState } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    };

    const personExist = persons.some(
      (person) => person.name === newPerson.name
    );

    const existingPerson = persons.find(
      (person) => person.name === newPerson.name
    );

    if (!personExist) {
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewPhoneNumber("");
        setMessage(`Added ${newPerson.name}`);
      });
    } else {
      const confirmation = confirm(
        `${newPerson.name} is already added to phobebook, replace the old number with a new one?`
      );
      if (confirmation) {
        const changedPerson = { ...newPerson, number: newPhoneNumber };
        personService
          .update(existingPerson.id, changedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== response.data.id ? person : response.data
              )
            );
            setMessage(`${response.data.name} has been updated`)
          });
      }
    }

    setTimeout(() => {
      setMessage("");
    }, 2000);
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

  const deletePerson = (id, name) => {
    const confirmation = confirm(`Delete ${name}`);
    if (confirmation) {
      personService.deletePerson(id);

      personService.getAll().then((response) => setPersons(response.data));
    }
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, [persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      {message !== "" && <div className="added-person">{message}</div>}
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
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;

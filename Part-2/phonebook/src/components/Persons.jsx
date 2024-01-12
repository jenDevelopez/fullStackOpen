

function Persons({filteredPersons, deletePerson}) {
  return (
    <ul>
    {filteredPersons.map((person) => (
      <li key={person.name} className="person">
        <p>
          {person.name}
          <span> {person.number}</span>
          <button onClick={() => deletePerson(person.id,person.name)}>delete</button>
        </p>
      </li>
    ))}
  </ul>
  )
}

export default Persons
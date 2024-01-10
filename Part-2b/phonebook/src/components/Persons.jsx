

function Persons({filteredPersons}) {
  return (
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
  )
}

export default Persons
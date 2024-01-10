
function Content({ parts }) {
  return (
    <ul>
      {parts.map((part) => (
        <li key={part.id}>
         {part.name}
         <span>{part.exercises}</span>
        </li>
      ))}
    </ul>
  )
}

export default Content
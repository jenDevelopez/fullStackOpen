
function Content({ parts }) {
  const total = parts.map((part) => part.exercises).reduce((accumulator, currentValue) => accumulator + currentValue)
  return (
    <>
     <ul>
      {parts.map((part) => (
        <li key={part.id}>
         {part.name}
         <span> {part.exercises}</span>
        </li>
      ))}
    </ul>
    <p>total of {total} exercises</p>
    </>
   
  )
}

export default Content
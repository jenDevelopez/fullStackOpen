
const Average = ({good, neutral, bad, all}) => {
  const goodComents = good > 0 ? good * 1 : 0
  const neutralComments = neutral > 0 ? neutral * 0 : 0
  const badComments = bad > 0 ? bad * -1 : 0
  const allComments = all
  const average = ((goodComents + neutralComments + badComments) / allComments).toFixed(1)
  const result = isNaN(average) ? '0' : <span>{average}</span>
  return (
    <p>average {result}</p>
  )
}

export default Average
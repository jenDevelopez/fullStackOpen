
const PositiveAverage = ({good, all}) => {
  const average = (good / all) * 100
  const result = isNaN(average) ? '0' : <span>{average}</span>
  return (
    <p>Positives comments {result} %</p>
  )
}

export default PositiveAverage
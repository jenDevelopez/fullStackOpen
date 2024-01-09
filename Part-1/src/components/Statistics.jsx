
import Average from "./Average"
import PositiveAverage from "./PositiveAverage"
PositiveAverage
const Statistics = ({good, neutral, bad, all}) => {
  return (
    <>
      
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
      </div>
      <div>
        <Average good={good} neutral={neutral} bad={bad} all={all} />
        <PositiveAverage good={good} all={all}/>
      </div>
    </>
  )
}

export default Statistics
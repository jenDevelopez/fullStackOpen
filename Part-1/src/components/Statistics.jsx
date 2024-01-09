import Button from "./Button"
import Average from "./Average"
import PositiveAverage from "./PositiveAverage"
PositiveAverage
const Statistics = ({handleClickGood, handleClickNeutral, handleClickBad, good, neutral, bad, all}) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" handleClick={handleClickGood} />
        <Button text="Neutral" handleClick={handleClickNeutral} />
        <Button text="Bad" handleClick={handleClickBad} />
      </div>
      <h2>Statistics</h2>
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
    </div>
  )
}

export default Statistics
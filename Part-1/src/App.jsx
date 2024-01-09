import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);
  const all = good + neutral + bad
 
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" handleClick={handleClickGood} />
        <Button text="Neutral" handleClick={handleClickNeutral} />
        <Button text="Bad" handleClick={handleClickBad} />
      </div>
      <h2>Statistics</h2>
      <>
        {all === 0 ? (
         <p>Not feedback given</p>
        ): (
           <Statistics handleClickBad={handleClickBad} handleClickGood={handleClickGood} handleClickNeutral={handleClickNeutral} good={good} bad={bad} neutral={neutral} all={all} />
        )}
      </>
    </div>
  );
};

export default App;

import { useState } from "react";
import Button from "./components/Button";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);
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
      </div>
    </div>
  );
};

export default App;

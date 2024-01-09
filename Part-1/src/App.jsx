import { useState } from "react";

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
   <Statistics handleClickBad={handleClickBad} handleClickGood={handleClickGood} handleClickNeutral={handleClickNeutral} good={good} bad={bad} neutral={neutral} all={all} />
  );
};

export default App;

import Average from "./Average";
import PositiveAverage from "./PositiveAverage";
PositiveAverage;
import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
      </div>
      <div>
        <Average good={good} neutral={neutral} bad={bad} all={all} />
        <PositiveAverage good={good} all={all} />
      </div>
    </>
  );
};

export default Statistics;

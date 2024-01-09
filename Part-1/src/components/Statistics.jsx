import Average from "./Average";
import PositiveAverage from "./PositiveAverage";
PositiveAverage;
import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <Average good={good} neutral={neutral} bad={bad} all={all} />
            </td>
          </tr>
          <tr>
            <td>
              <PositiveAverage good={good} all={all} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;

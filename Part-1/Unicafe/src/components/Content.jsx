import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Content = ({
  parts 
}) => {
  const [part1, part2, part3] = parts
  return (
    <>
      <Part1 part1={part1.name}  exercises1={part1.exercises}/>
      <Part2 part2={part2.name}  exercises1={part2.exercises}/>
      <Part3 part3={part3.name}  exercises1={part3.exercises}/>
    </>
  );
};

export default Content;

import { useState } from "react";
import AnecdoteVoted from "./components/AnecdoteVoted";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const randomNumber = Math.round(Math.random() * 8);

  const handleClickNextAnecdote = () => {
    Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [dataBetterAnecdote, setDataBetterAnecdote] = useState({
    anecdote: 0,
    votes: 0,
  });

  const addVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const maxValueAnecdoteAndPuntutaion = () => {
    const max = Math.max(...points);
    const position = points.indexOf(max);
    setDataBetterAnecdote({
      anecdote: anecdotes[position],
      votes: max,
    });
  };

  const handleClickVote = () => {
    addVote();
    maxValueAnecdoteAndPuntutaion();
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNextAnecdote}>Next anecdote</button>

      <div>
        <AnecdoteVoted
          anecdote={dataBetterAnecdote.anecdote}
          votes={dataBetterAnecdote.votes}
        />
      </div>
    </div>
  );
};

export default App;

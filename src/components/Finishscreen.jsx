import { useQuestions } from "../contexts/QuestionsContaxt";

function Finishscreen() {
  const { points, totalpoints, highScored, dispatch } = useQuestions();

  const precentage = (points / totalpoints) * 100;
  let emoji;
  if (points === precentage) emoji = "🥇";
  else if (precentage >= 80 && precentage < 100) emoji = "🎉";
  else if (precentage >= 50 && precentage < 80) emoji = "😊";
  else if (precentage >= 0 && precentage < 50) emoji = "😕";
  if (points === 0) emoji = "😢";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {totalpoints} (
        {Math.ceil(precentage)}
        %)
      </p>

      <p className="highscore">(Highscored: {highScored} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finishscreen;

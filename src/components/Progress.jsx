import { useQuestions } from "../contexts/QuestionsContaxt";

function Progress() {
  const { index, numQuestions, points, answer, totalpoints } = useQuestions();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> / <strong>{totalpoints}</strong>
      </p>
    </header>
  );
}

export default Progress;

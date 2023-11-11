import { useQuestions } from "../contexts/QuestionsContaxt";

function Nextques() {
  const { index, dispatch, answer, numQuestions } = useQuestions();

  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQues" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        finish
      </button>
    );
}

export default Nextques;

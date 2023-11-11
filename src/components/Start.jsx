import { useQuestions } from "../contexts/QuestionsContaxt";

function Start() {
  const { dispatch, questions } = useQuestions();

  const handleStart = () => dispatch({ type: "start" });

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let&apos;s start
      </button>
    </div>
  );
}

export default Start;

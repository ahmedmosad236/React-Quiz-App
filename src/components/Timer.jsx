import { useEffect } from "react";
import { useQuestions } from "../contexts/QuestionsContaxt";

function Timer() {
  const { dispatch, secondsRemaining } = useQuestions();

  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "trik" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer">
      {min}:{sec}
    </div>
  );
}

export default Timer;

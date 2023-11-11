import { useQuestions } from "../contexts/QuestionsContaxt";
import Options from "./Options";

function Questions() {
  const { questions, index } = useQuestions();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options options={question.options} question={question} />
    </div>
  );
}

export default Questions;

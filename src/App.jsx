import { useQuestions } from "./contexts/QuestionsContaxt";

import QuestionSection from "./components/QuestionSection";
import Finishscreen from "./components/Finishscreen";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Start from "./components/Start";
import Error from "./components/Error";
import Main from "./components/Main";

const App = () => {
  const { status } = useQuestions();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <Start />}
        {status === "active" && <QuestionSection />}
        {status === "finished" && <Finishscreen />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
};

export default App;

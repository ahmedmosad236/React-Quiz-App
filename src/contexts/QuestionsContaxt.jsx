import { createContext, useContext, useEffect, useReducer } from "react";

const QuestionsContaxt = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScored: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  let question;
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };

    case "dataRecive":
      return { ...state, questions: action.payload, status: "ready" };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };

    case "dataFailed":
      return { ...state, status: "error" };

    case "newAnswer":
      question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQues":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScored:
          state.points > state.highScored ? state.points : state.highScored,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    case "trik":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining === 0
            ? (state.status = "finished")
            : state.secondsRemaining - 1,
      };
    default:
      throw new Error("unknown action");
  }
};

export const QuestionsContaxtProvider = ({ children }) => {
  const [{ questions, ...init }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const totalpoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  // Fetch Data
  useEffect(() => {
    const getQuestions = async () => {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(
          "https://ahmedmosad236.github.io/react-quiz-api/react-quiz.json"
        );

        if (!res.ok) throw new Error();
        const data = await res.json();

        dispatch({ type: "dataRecive", payload: data.questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };

    getQuestions();
  }, []);

  const values = {
    ...init,
    questions,
    numQuestions,
    totalpoints,
    dispatch,
  };

  return (
    <QuestionsContaxt.Provider value={values}>
      {children}
    </QuestionsContaxt.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionsContaxt);
  return context;
};

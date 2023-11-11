import Footer from "./Footer";
import Nextques from "./Nextques";
import Progress from "./Progress";
import Questions from "./Questions";
import Timer from "./Timer";

const QuestionSection = () => {
  return (
    <>
      <Progress />
      <Questions />
      <Footer>
        <Timer />
        <Nextques />
      </Footer>
    </>
  );
};

export default QuestionSection;

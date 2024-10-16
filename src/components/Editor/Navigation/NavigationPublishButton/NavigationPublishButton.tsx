import { generatePath } from "react-router-dom";
import { Quiz } from "../../../../types/quiz";
import Button from "../../../Shared/Button";

type Props = {
  quiz: Quiz;
  className?: string;
  quizCreated: (value: boolean) => void;
};

export default function NavigationPublishButton({
  quiz,
  className,
  quizCreated,
}: Props) {
  function publishQuiz() {
    const baseQuiz = btoa(encodeURIComponent(JSON.stringify(quiz)));
    const path = generatePath("/quiz-maker/#/play/" + baseQuiz);

    navigator.clipboard.writeText(window.location.origin + path);
  }

  return (
    <Button
      className={className}
      disabled={quiz.questions.length === 0}
      onClick={() => {
        publishQuiz();
        quizCreated(true);
      }}
    >
      Publish
    </Button>
  );
}

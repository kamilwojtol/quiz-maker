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
    navigator.clipboard.writeText(window.location.origin + "/" + baseQuiz);
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

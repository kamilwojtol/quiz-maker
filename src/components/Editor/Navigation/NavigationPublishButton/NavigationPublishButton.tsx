import { Quiz } from "../../../../types/quiz";
import Button from "../../../Shared/Button";

type Props = {
  quiz: Quiz;
};

export default function NavigationPublishButton({ quiz }: Props) {
  function publishQuiz() {
    const baseQuiz = btoa(encodeURIComponent(JSON.stringify(quiz)));
    navigator.clipboard.writeText(baseQuiz);
  }

  return (
    <Button
      disabled={quiz.questions.length === 0}
      onClick={() => {
        publishQuiz();
      }}
    >
      Publish
    </Button>
  );
}

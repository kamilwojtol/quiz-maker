import { Quiz } from "../../../../types/quiz";

type Props = {
  quiz: Quiz;
  className?: string;
};

export default function NavigationPublishButton({ quiz, className }: Props) {
  function publishQuiz() {
    const baseQuiz = btoa(encodeURIComponent(JSON.stringify(quiz)));
    navigator.clipboard.writeText(baseQuiz);
  }

  return (
    <button
      className={"border-2 p-2 rounded-lg disabled:opacity-30 " + className}
      disabled={quiz.questions.length === 0}
      onClick={() => {
        publishQuiz();
      }}
    >
      Publish
    </button>
  );
}

import { Question, Quiz } from "../../../types/quiz";
import QuestionsView from "./QuestionsView/QuestionsView";
import AnswersView from "./AnswersView/AnswersView";

type Props = {
  className: string;
  quiz: Quiz;
  activePage: Question;
  type: "question" | "answer";
};

export function MainView({ type, className, activePage }: Props) {
  return (
    <div className={className + " border-2 flex flex-col items-center h-full"}>
      {type === "question" ? (
        <QuestionsView activePage={activePage} />
      ) : (
        <AnswersView activePage={activePage} />
      )}
    </div>
  );
}

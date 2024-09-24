import { Question, Quiz } from "../../../types/quiz";

type Props = {
  className: string;
  quiz: Quiz;
  activePage: Question;
};

export function MainView({ className, activePage }: Props) {
  return (
    <div className={className + " border-2 flex flex-col items-center h-full"}>
      <div className="mt-2">{activePage.value}</div>
      <div className="flex flex-col gap-2 justify-center items-center">
        {activePage.answers.map((answer, index) => (
          <button key={index}>{answer.value}</button>
        ))}
      </div>
    </div>
  );
}

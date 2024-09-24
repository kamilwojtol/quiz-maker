import { Page, Quiz } from "../../../types/quiz";
import { NavigationElement } from "./NavigationElement/NavigationElement";

type Props = {
  quiz: Quiz;
  changeView: (page: Page) => void;
};

export function Navigation({ quiz, changeView }: Props) {
  return (
    <div className="flex flex-row gap-3 border-2 justify-center items-center px-4 h-20 bottom-0 fixed w-full">
      {quiz.questions.map((question, index) => (
        <NavigationElement
          changeView={changeView}
          key={index}
          id={index}
          type="slide"
        />
      ))}
      <NavigationElement
        changeView={changeView}
        key={quiz.questions.length + 1}
        id={quiz.questions.length + 1}
        type="new"
      />
    </div>
  );
}

import { Quiz } from "../../../types/quiz";
import { NavigationElement } from "./NavigationElement/NavigationElement";

type Props = {
  quiz: Quiz;
};

export function Navigation({ quiz }: Props) {
  return (
    <div className="flex flex-row gap-3 border-2 justify-center items-center px-4 h-20 bottom-0 fixed w-full">
      {quiz.questions.map((question, index) => (
        <NavigationElement key={index} type="slide" />
      ))}
      <NavigationElement type="new" />
    </div>
  );
}

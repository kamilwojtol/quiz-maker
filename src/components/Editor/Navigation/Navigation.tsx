import { useState } from "react";
import { Page, Quiz } from "../../../types/quiz";
import { NavigationElement } from "./NavigationElement/NavigationElement";
import NavigationElementNew from "./NavigationElement/NavigationElementNew";
import NavigationPublishButton from "./NavigationPublishButton/NavigationPublishButton";
import { createPortal } from "react-dom";

type Props = {
  quiz: Quiz;
  changeView: (page: Page) => void;
};

export function Navigation({ quiz, changeView }: Props) {
  const [isQuizPublished, setIsQuizPublished] = useState<boolean>(false);

  return (
    <div className="flex flex-row gap-3 border-2 justify-center items-center px-4 h-20 bottom-0 fixed w-full">
      {quiz.questions.map((question, index) => (
        <NavigationElement changeView={changeView} key={index} id={index} />
      ))}
      <NavigationElementNew
        changeView={changeView}
        key={quiz.questions.length + 1}
        id={quiz.questions.length + 1}
      />
      <NavigationPublishButton
        className="ml-auto"
        quiz={quiz}
        quizCreated={(value: boolean) => {
          setIsQuizPublished(value);
        }}
      />
      {isQuizPublished &&
        createPortal(<div>Hewklo</div>, document.getElementById("root")!)}
    </div>
  );
}

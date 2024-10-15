import { useState } from "react";
import { Page, Quiz } from "../../../types/quiz";
import { NavigationElement } from "./NavigationElement/NavigationElement";
import NavigationElementNew from "./NavigationElement/NavigationElementNew";
import NavigationPublishButton from "./NavigationPublishButton/NavigationPublishButton";
import { createPortal } from "react-dom";
import Modal from "../../Shared/Modal";

type Props = {
  quiz: Quiz;
  changeView: (page: Page) => void;
};

export function Navigation({ quiz, changeView }: Props) {
  const [isQuizPublished, setIsQuizPublished] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  return (
    <div className="flex flex-row gap-3 border-2 justify-center items-center px-4 h-20 bottom-0 fixed w-full">
      {quiz.questions.map((_question, index) => (
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
          setIsModalVisible(true);
        }}
      />
      {isQuizPublished &&
        createPortal(
          <Modal
            changeVisibility={() => setIsModalVisible(!isModalVisible)}
            isVisible={isModalVisible}
          >
            Link to this quiz is copied to your clipboard. Share it with your
            friends!
          </Modal>,
          document.body,
        )}
    </div>
  );
}

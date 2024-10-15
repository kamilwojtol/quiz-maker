import { Question } from "../../../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/state";
import {
  addAnswer,
  removeAnswer,
  updateAnswer,
  setCorrectAnswer,
} from "../../../../state/quiz/quiz";
import { PlusIcon, CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import Button from "../../../Shared/Button";
import AlphabetIcon from "../../../Shared/AlphabetIcon";

type Props = {
  activePage: Question;
};

export default function AnswersView({ activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="mt-4 flex flex-col gap-2 justify-center items-center">
      {activePage.answers.map((answer, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <AlphabetIcon letter={alphabet[index]} />
          <input
            type="text"
            value={answer.value}
            className="p-2 mx-2 border-2 rounded-md border-dashed border-gray-400"
            onChange={(e) => {
              dispatch(
                updateAnswer({
                  id: answer.id,
                  pageId: activePage.id,
                  value: e.target.value,
                }),
              );
            }}
          />
          <Button
            className="flex gap-2 justify-center items-center w-[240px]"
            type={
              answer.id === activePage.correctAnswerId ? "success" : "primary"
            }
            onClick={() => {
              dispatch(
                setCorrectAnswer({
                  questionId: activePage.id,
                  answerId: answer.id,
                }),
              );
            }}
          >
            <CheckIcon className="size-5 cursor-pointer" />
            {answer.id === activePage.correctAnswerId
              ? "Selected as correct answer"
              : "Set as correct answer"}
          </Button>
          <Button
            className="flex gap-2 justify-center items-center"
            type="danger"
            onClick={() => {
              dispatch(
                removeAnswer({
                  answerId: answer.id,
                  questionId: activePage.id,
                }),
              );
            }}
          >
            <MinusIcon
              className="size-5"
              onClick={() => {
                dispatch(
                  removeAnswer({
                    answerId: answer.id,
                    questionId: activePage.id,
                  }),
                );
              }}
            />
            Remove answer
          </Button>
        </div>
      ))}
      <PlusIcon
        className="size-5 cursor-pointer mt-2"
        onClick={() => {
          dispatch(addAnswer({ id: activePage.id, value: "" }));
        }}
      />
    </div>
  );
}

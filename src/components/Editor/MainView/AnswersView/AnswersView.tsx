import { Question } from "../../../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/state";
import {
  addAnswer,
  removeAnswer,
  updateAnswer,
  setCorrectAnswer,
} from "../../../../state/quiz/quiz";
import { MinusIcon, PlusIcon, CheckIcon } from "@heroicons/react/20/solid";
import Button from "../../../Shared/Button";

type Props = {
  activePage: Question;
};

export default function AnswersView({ activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mt-4 flex flex-col gap-2 justify-center items-center">
      {activePage.answers.map((answer, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <MinusIcon
            className="size-5 cursor-pointer"
            onClick={() => {
              dispatch(
                removeAnswer({
                  answerId: answer.id,
                  questionId: activePage.id,
                }),
              );
            }}
          />
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
            className="flex gap-2 justify-center items-center"
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

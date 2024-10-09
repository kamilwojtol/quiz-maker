import { Question } from "../../../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/state";
import {
  addAnswer,
  removeAnswer,
  updateAnswer,
} from "../../../../state/quiz/quiz";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

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

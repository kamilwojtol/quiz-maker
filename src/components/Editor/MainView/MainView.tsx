import { Question, Quiz } from "../../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/state";
import { updateQuestion, updateAnswer } from "../../../state/quiz/quiz";

type Props = {
  className: string;
  quiz: Quiz;
  activePage: Question;
};

export function MainView({ className, activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={className + " border-2 flex flex-col items-center h-full"}>
      <input
        type="text"
        className="p-2 mt-4 mb-2 border-2 rounded-md border-dashed border-gray-400"
        value={activePage.value}
        onChange={(e) =>
          dispatch(
            updateQuestion({
              id: activePage.id,
              value: e.target.value,
              answers: activePage.answers,
            }),
          )
        }
      />
      <div className="mt-4 flex flex-col gap-2 justify-center items-center">
        {activePage.answers.map((answer, index) => (
          <input
            type="text"
            key={index}
            value={answer.value}
            className="p-2 mx-2 border-2 rounded-md border-dashed border-gray-400"
            onChange={(e) => {
              dispatch(
                updateAnswer({
                  id: answer.id,
                  value: e.target.value,
                }),
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}

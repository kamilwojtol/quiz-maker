import { Question } from "../../../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/state";
import { updateAnswer } from "../../../../state/quiz/quiz";

type Props = {
  activePage: Question;
};

export default function AnswersView({ activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
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
  );
}

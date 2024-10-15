import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/state";
import { updateQuestion } from "../../../../state/quiz/quiz";
import { Question } from "../../../../types/quiz";

type Props = {
  activePage: Question;
};

export default function QuestionsView({ activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return activePage ? (
    <input
      type="text"
      className="w-3/4 p-2 mt-4 mb-2 border-2 rounded-md border-dashed border-gray-400"
      value={activePage.value}
      placeholder="Enter question"
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
  ) : null;
}

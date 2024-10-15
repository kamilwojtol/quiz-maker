import { useDispatch } from "react-redux";
import { Question } from "../../../types/quiz";
import Button from "../../Shared/Button";
import { AppDispatch } from "../../../state/state";
import { changeActivePage, removeQuestion } from "../../../state/quiz/quiz";

type Props = {
  className: string;
  activePage: Question;
};

export function Settings({ className, activePage }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={className + " border-2 flex flex-col items-center gap-2"}>
      {activePage && (
        <>
          <h2 className="text-2xl mt-1">Question {activePage.id}</h2>
          <Button
            type="danger"
            className="w-3/4 p-4 mt-2"
            onClick={() => {
              dispatch(removeQuestion(activePage.id));
              dispatch(
                changeActivePage({
                  id: activePage.id - 2,
                  type: "question",
                }),
              );
            }}
          >
            Remove Question
          </Button>
        </>
      )}
    </div>
  );
}

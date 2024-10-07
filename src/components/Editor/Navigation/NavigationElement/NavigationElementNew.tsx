import { Page } from "../../../../types/quiz";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../../state/quiz/quiz";
import { AppDispatch } from "../../../../state/state";

type Props = {
  className?: string;
  changeView: (page: Page) => void;
  id: number;
};

export default function NavigationElementNew({ id }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="border-2 p-2  cursor-pointer hover:bg-gray-100 rounded-lg">
      <PlusIcon
        className="size-5 cursor-pointer"
        onClick={() => {
          dispatch(addQuestion({ id: id, value: "", answers: [] }));
        }}
      />
    </div>
  );
}

import { Page } from "../../../../../types/quiz";

type Props = {
  type: "answer" | "question";
  changeView: (page: Page) => void;
  id: number;
};

export function NavigationTile({ type, id, changeView }: Props) {
  const radiusClass = type === "answer" ? "rounded-r-lg" : "rounded-l-lg";
  const tileText = type === "answer" ? "A" : "Q";

  return (
    <div
      className={"border-2 p-2 cursor-pointer hover:bg-gray-100 " + radiusClass}
      onClick={() => changeView({ id: id, type: type })}
    >
      {tileText}
    </div>
  );
}

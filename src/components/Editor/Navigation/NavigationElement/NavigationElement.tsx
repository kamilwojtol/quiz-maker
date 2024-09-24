import { Page } from "../../../../types/quiz";
import { NavigationTile } from "./NavigationTile/NavigationTile";

type Props = {
  type: "new" | "slide";
  changeView: (page: Page) => void;
  id: number;
};

export function NavigationElement({ type, changeView, id }: Props) {
  return (
    <div className="flex">
      {type === "slide" ? (
        <div className="flex flex-row gap-1">
          <NavigationTile type="question" id={id} changeView={changeView} />
          <NavigationTile type="answer" id={id} changeView={changeView} />
        </div>
      ) : (
        <div>+</div>
      )}
    </div>
  );
}

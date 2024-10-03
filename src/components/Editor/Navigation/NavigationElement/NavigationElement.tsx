import { Page } from "../../../../types/quiz";
import { NavigationTile } from "./NavigationTile/NavigationTile";

type Props = {
  changeView: (page: Page) => void;
  id: number;
  className?: string;
};

export function NavigationElement({ className, changeView, id }: Props) {
  return (
    <div className={className + " flex"}>
      <div className="flex flex-row gap-1">
        <NavigationTile type="question" id={id} changeView={changeView} />
        <NavigationTile type="answer" id={id} changeView={changeView} />
      </div>
    </div>
  );
}

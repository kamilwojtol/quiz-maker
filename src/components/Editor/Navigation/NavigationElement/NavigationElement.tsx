import { NavigationTile } from "./NavigationTile/NavigationTile";

type Props = {
  type: "new" | "slide";
};

export function NavigationElement({ type }: Props) {
  return (
    <div className="flex">
      {type === "slide" ? (
        <div className="flex flex-row gap-1">
          <NavigationTile type="question" /> <NavigationTile type="answer" />
        </div>
      ) : (
        <div>+</div>
      )}
    </div>
  );
}

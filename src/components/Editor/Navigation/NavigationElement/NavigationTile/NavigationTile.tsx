type Props = {
  type: "answer" | "question";
};

export function NavigationTile({ type }: Props) {
  const radiusClass = type === "answer" ? "rounded-r-lg" : "rounded-l-lg";
  const tileText = type === "answer" ? "A" : "Q";

  return (
    <div
      className={"border-2 p-2 cursor-pointer hover:bg-gray-100 " + radiusClass}
    >
      {tileText}
    </div>
  );
}

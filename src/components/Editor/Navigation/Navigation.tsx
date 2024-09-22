import { NavigationElement } from "./NavigationElement/NavigationElement";

type Props = {};

export function Navigation({}: Props) {
  return (
    <div className="flex flex-row gap-3 border-2 justify-center items-center px-4 h-20 bottom-0 fixed w-full">
      <NavigationElement type="slide" />
      <NavigationElement type="slide" />
      <NavigationElement type="new" />
    </div>
  );
}

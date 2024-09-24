import { Quiz } from "../../../types/quiz";

type Props = {
  className: string;
  quiz: Quiz;
};

export function MainView({ className }: Props) {
  return <div className={className + " border-2"}>MainView</div>;
}

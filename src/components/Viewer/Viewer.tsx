import { Quiz } from "../../types/quiz";

type Props = {
  quiz: Quiz;
};

export function Viewer({ quiz }: Props) {
  return <pre>{JSON.stringify(quiz, null, 2)}</pre>;
}

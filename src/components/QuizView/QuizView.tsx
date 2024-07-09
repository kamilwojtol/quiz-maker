import styles from "./QuizView.module.css";

type QuizViewProps = {
  className?: string;
  id?: string;
};

export default function QuizView(props: QuizViewProps) {
  return (
    <div className={`${props.className} ${styles.quiz}`}>
      <p>Quiz view</p>
    </div>
  );
}

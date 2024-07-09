import styles from "./ControlPanel.module.css";
import SlideButton from "./SlideButtons/SlideButtons";

type ControlPanelProps = {
  className?: string;
  id?: string;
};

export default function ControlPanel(props: ControlPanelProps) {
  return (
    <div
      className={`${props.className} ${styles.control} flex justify-center items-center`}
    >
      <SlideButton />
    </div>
  );
}

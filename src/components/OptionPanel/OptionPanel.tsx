import styles from "./OptionPanel.module.css";

type OptionPanelProps = {
  className?: string;
  id?: string;
};

export default function OptionPanel(props: OptionPanelProps) {
  return (
    <div className={`${props.className} ${styles.option}`}>
      <p>Option Panel</p>
    </div>
  );
}

import styles from "./SlideButton.module.css";

type SlideButtonProps = {
  slideNumber: number;
  className?: string;
  id?: string;
  addSlide?: boolean;
};

export default function SlideButton(props: SlideButtonProps) {
  function isAddSlide() {
    return props.addSlide ? (
      <div>Add Slide</div>
    ) : (
      <div>
        {props.slideNumber}
        <div>
          <button className={styles.buttonQuestion}>Q</button>
          <button className={styles.buttonAnswer}>A</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        props.className +
        " px-3 py-1 flex flex-col justify-center items-center " +
        styles.slideButton +
        " " +
        { addSlide: isAddSlide } // ????
      }
      id={props.id}
    >
      {isAddSlide()}
    </div>
  );
}

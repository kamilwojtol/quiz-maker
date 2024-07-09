import SlideButton from "../SlideButton/SlideButton";

type SlideButtonProps = {
  className?: string;
  id?: string;
};

export default function SlideButtons(props: SlideButtonProps) {
  return (
    <div className={`${props.className} flex flex-row`} id={props.id}>
      <SlideButton slideNumber={1} />
      <SlideButton slideNumber={2} />
      <SlideButton slideNumber={3} addSlide />
    </div>
  );
}

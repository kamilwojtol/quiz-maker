type Props = {
  className: string;
};

export function MainView({ className }: Props) {
  return <div className={className + " border-2"}>MainView</div>;
}

type Props = {
  letter: string;
  onClick?: () => void;
};

export default function AlphabetIcon({ letter, onClick }: Props) {
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {letter})
    </button>
  );
}

import Logo from "../../assets/logoipsum-332.svg";

export default function Header() {
  return (
    <header className="p-5">
      <img src={Logo} alt="Logo of Quiz Maker" />
    </header>
  );
}

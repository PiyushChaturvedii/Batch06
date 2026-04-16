import Logo from "../assets/logo.png";
import "./Header.css"
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <a className="title" href="/">Home</a>
    </header>
  );
};

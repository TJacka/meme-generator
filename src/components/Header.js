import "../style.css";

export default function Header() {
  return (
    <header>
      <img
        className="header--logo"
        src={require("../images/logo.png")}
        alt="logo"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

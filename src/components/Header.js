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
    </header>
  );
}

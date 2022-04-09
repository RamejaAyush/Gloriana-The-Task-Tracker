import "../styles/nav.scss";
import Icon from "../media/icon.svg";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Icon} alt="" />
        <h1>Gloriana</h1>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">App</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;

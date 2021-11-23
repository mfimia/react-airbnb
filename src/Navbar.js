import "./css/Navbar.css";
import airbnbLogo from "./img/airbnb-transparent.png";
export default function Navbar() {
  return (
    <nav>
      <img alt="Airnbnb logo" src={airbnbLogo} id="airbnb-logo" />
    </nav>
  );
}

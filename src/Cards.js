import image1 from "./img/image 12.png";
import image2 from "./img/wedding-photography 1.png";
import image3 from "./img/mountain-bike 1.png";
import "./css/Cards.css";
export default function Cards() {
  return (
    <div>
      <img src={image1} id="large-image1" alt="Airbnb card" />
      <div id="image1-caption">
        <div className="top-title">⭐ 5.0 (6) - USA</div>
        <div className="mid-title">Life lessons with Katie Zaferes</div>
        <div className="bot-title"><b>From $136 /</b> person</div>
      </div>
      <img src={image2} id="large-image2" alt="Airbnb card" />
      <div id="image2-caption">
        <div className="top-title">⭐ 5.0 (30) - USA</div>
        <div className="mid-title">Learn wedding photography</div>
        <div className="bot-title"><b>From $125 /</b> person</div>
      </div>
      <img src={image3} id="large-image3" alt="Airbnb card" />
      <div id="image3-caption">
        <div className="top-title">⭐ 4.8 (2) - USA</div>
        <div className="mid-title">Group Mountain Biking</div>
        <div className="bot-title"><b>From $50 /</b> person</div>
      </div>
    </div>
  );
}

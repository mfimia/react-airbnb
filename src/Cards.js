import "./css/Cards.css";
let counter = 0;
export default function Cards(props) {
  counter++;
  return (
    <div>
      <img src={props.image} id={`large-image${counter}`} alt="Airbnb card" />
      <div id={`image${counter}-caption`}>
        <div className="top-title">
          ⭐ {props.rate} ({props.weirdNumber}) - {props.country}
        </div>
        <div className="mid-title">{props.description}</div>
        <div className="bot-title">
          <b>From ${props.cost} /</b> person
        </div>
      </div>
    </div>
  );
}

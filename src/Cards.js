import "./css/Cards.css";

export default function Cards(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        id={`large-image${props.cardID}`}
        alt="Airbnb card"
      />
      <div id={`image${props.cardID}-caption`}>
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
        <div className="top-title">
          ⭐ {props.rate} ({props.reviewCount}) - {props.country}
        </div>
        <div className="mid-title">{props.title}</div>
        <div className="bot-title">
          <b>From ${props.cost} /</b> person
        </div>
      </div>
    </div>
  );
}

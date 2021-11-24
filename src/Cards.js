import "./css/Cards.css";

export default function Cards(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img
        src={props.image}
        id={`large-image${props.cardID}`}
        alt="Airbnb card"
      />
      <div id={`image${props.cardID}-caption`}>
        {(props.country === "Online" || props.openSpots === 0) && (
          <div className="card--badge">{badgeText}</div>
        )}
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

import "./css/Cards.css";

export default function Cards(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img
        src={props.card.coverImg}
        id={`large-image${props.card.id}`}
        alt="Airbnb card"
      />
      <div id={`image${props.card.id}-caption`}>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <div className="top-title">
          ⭐ {props.card.stats.rating} ({props.card.stats.reviewCount}) -{" "}
          {props.card.location}
        </div>
        <div className="mid-title">{props.card.title}</div>
        <div className="bot-title">
          <b>From ${props.card.price} /</b> person
        </div>
      </div>
    </div>
  );
}

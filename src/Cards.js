import "./css/Cards.css";

export default function Cards(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} id={`large-image${props.key}`} alt="Airbnb card" />
      <div id={`image${props.key}-caption`}>
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

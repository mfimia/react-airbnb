import PicSection from "./PicSection";
import "./css/MainSection.css";
import Cards from "./Cards";
import cardData from "./data";

export default function MainSection() {
  const updatedCards = cardData.map((card) => {
    return (
      <Cards
        image={card.coverImg}
        rate={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country="USA"
        description={card.description}
        cost={card.price}
        cardId={card.id}
      />
    );
  });
  return (
    <>
      <PicSection />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      {updatedCards}
    </>
  );
}

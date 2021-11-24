import PicSection from "./PicSection";
import "./css/MainSection.css";
import Cards from "./Cards";
import cardData from "./data";

export default function MainSection() {
  const updatedCards = cardData.map((card) => {
    return (
      <Cards
        // Adding unique key property to avoid React error showing up in console
        key={card.id}
        card={card}
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

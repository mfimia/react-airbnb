import PicSection from "./PicSection";
import "./css/MainSection.css";
import Cards from "./Cards";
export default function MainSection() {
  return (
    <>
      <PicSection />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <Cards />
    </>
  );
}

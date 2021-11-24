import PicSection from "./PicSection";
import "./css/MainSection.css";
import Cards from "./Cards";
import image1 from "./img/image 12.png";
import image2 from "./img/wedding-photography 1.png";
import image3 from "./img/mountain-bike 1.png";
export default function MainSection() {
  return (
    <>
      <PicSection />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <Cards
        image={image1}
        rate={5.0}
        weirdNumber={6}
        country="USA"
        description="Life lessons with Katie Zaferes"
        cost={136}
      />
      <Cards
        image={image2}
        rate={5.0}
        weirdNumber={30}
        country="USA"
        description="Learn wedding photography"
        cost={125}
      />
      <Cards
        image={image3}
        rate={4.8}
        weirdNumber={2}
        country="USA"
        description="Group mountain biking"
        cost={50}
      />
    </>
  );
}

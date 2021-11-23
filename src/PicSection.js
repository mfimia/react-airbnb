import "./css/PicSection.css";
import image22 from './img/image 22.png'
import image23 from './img/image 23.png'
import image24 from './img/image 24.png'
import image25 from './img/image 25.png'
import image26 from './img/image 26.png'
import image27 from './img/image 27.png'
import image28 from './img/image 28.png'
import image29 from './img/image 29.png'
import image30 from './img/image 30.png'

export default function PicSection() {
  return (
    <section className="PicSection">
      <img src={image22} id="image22" alt="Airbnb fancy pic" />
      <img src={image23} id="image23" alt="Airbnb fancy pic" />
      <img src={image24} id="image24" alt="Airbnb fancy pic" />
      <img src={image25} id="image25" alt="Airbnb fancy pic" />
      <img src={image26} id="image26" alt="Airbnb fancy pic" />
      <img src={image27} id="image27" alt="Airbnb fancy pic" />
      <img src={image28} id="image28" alt="Airbnb fancy pic" />
      <img src={image29} id="image29" alt="Airbnb fancy pic" />
      <img src={image30} id="image30" alt="Airbnb fancy pic" />
    </section>
  );
}

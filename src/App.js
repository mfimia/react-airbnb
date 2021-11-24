import Navbar from "./Navbar.js";
import MainSection from "./MainSection";
import "./css/index.css";
// import Contact from "./Contact.js";
// import './Contact.css'
// import image1 from './img/image 12.png'
// import image2 from './img/image 23.png'
// import image3 from './img/image 29.png'
// import image4 from './img/image 28.png'
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

// return (
//   <div className="contacts">
//     <Contact
//       img={image1}
//       name="test1"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img={image2}
//       name="test2"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img={image3}
//       name="test3"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img={image4}
//       name="test4"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//   </div>
// );

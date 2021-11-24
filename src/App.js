import Navbar from "./Navbar.js";
import MainSection from "./MainSection";
import "./css/index.css";
// import Contact from "./Contact.js";
// import './Contact.css'
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
//       img="./img/image 12.png"
//       name="test1"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img="./img/image 23.png"
//       name="test2"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img="./img/image 29.png"
//       name="test3"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//     <Contact
//       img="./img/image 28.png"
//       name="test4"
//       phone="+00nope"
//       email="nope@nope.nop"
//     />
//   </div>
// );

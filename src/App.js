// import Navbar from "./Navbar.js";
// import MainSection from "./MainSection";
// import "./css/index.css";
import Contact from "./Contact.js";
// import './Contact.css'
export default function App() {
  //   return (
  //     <div className="App">
  //       <Navbar />
  //       <MainSection />
  //     </div>
  //   );
  return (
    <div className="contacts">
      <Contact
        img="./img/image 12.png"
        name="Lukitas"
        phone="+00nope"
        email="nope@nope.nop"
      />
      <Contact
        img="./img/image 23.png"
        name="Toni"
        phone="+00nope"
        email="nope@nope.nop"
      />
      <Contact
        img="./img/image 29.png"
        name="Suso"
        phone="+00nope"
        email="nope@nope.nop"
      />
      <Contact
        img="./img/image 28.png"
        name="Siso"
        phone="+00nope"
        email="nope@nope.nop"
      />
    </div>
  );
}

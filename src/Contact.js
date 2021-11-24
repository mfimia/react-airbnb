import "./Contact.css";
// import pic from "./img/image 12.png";
export default function Contact({ img, name, phone, email }) {
  return (
    <>
      <div className="contact-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={img} alt="" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={img} alt="" />
          <p>{email}</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

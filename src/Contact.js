import "./Contact.css";
export default function Contact({ img, name, phone, email }) {
  return (
    <>
      <div className="contact-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src="" alt="" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src="" alt="" />
          <p>{email}</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

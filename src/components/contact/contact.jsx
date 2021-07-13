import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} method="POST" data-Email="https://script.google.com/macros/s/AKfycbz-2qGjkg71_FCFQWZarYPH9-q6VhXcC_RwuAr6WVc/dev">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll get in touch ASAP </span>}
        </form>
      </div>
    </div>
  );
}

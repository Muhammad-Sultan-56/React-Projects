import React from "react";
import Buttons from "./Buttons";

function ContactSection() {
  return (
    <section className="container mt-5 bg-light p-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">CONTACT US</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-none form-element"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control shadow-none form-element"
                placeholder="Your Phone"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control shadow-none form-element"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control form-element"
                placeholder="Message"
                rows={6}
              ></textarea>
            </div>
            <Buttons title={"SEND"}></Buttons>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.245804803644!2d71.63444457433224!3d29.509193643734406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9f1bc79afc67%3A0xabbf84fb0c1fd385!2sTareen%20Institute%20of%20Computer%20Education%20%26%20Resources%20(TICER)!5e0!3m2!1sen!2s!4v1716538035588!5m2!1sen!2s"
            className="w-100 h-100"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

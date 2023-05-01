import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.862414512699!2d85.31427792460916!3d27.684095702982674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1971f86f9085%3A0x2796685cd17b0f0e!2sPro%20Fitness%20Store!5e0!3m2!1sen!2snp!4v1674875589127!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contactContainer">
        <a className="mailBtn" href="mailto:mdhrbikesh10@gmail.com">
          <Button>Contact: mdhrbikesh10@gmail.com</Button>
          <p> Bibek Manandhar 9843185082</p>
          <br></br>
          <p> Prakash Shrestha 9840171080</p>
        </a>
      </div>
    </>
  );
};

export default Contact;

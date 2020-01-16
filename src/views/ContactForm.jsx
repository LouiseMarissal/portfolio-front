import React, { useState, useRef } from "react";
import layout from "./../CSS/layout.scss";
import { Alert } from "reactstrap";
import axios from "axios";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({});
  const [dbMessage, setDbMessage] = useState("");
  const [hideDbMessage, setHideDbMessage] = useState(true);
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    message.current.value = "";
    email.current.value = "";
    name.current.value = "";

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/send", formValues)
      .then(response => {
        if (response.status === 200) {
          setDbMessage("Message envoyé");
          setHideDbMessage(false);
        } else if (response.status === 500 || 503) {
          setDbMessage("Message failed to send.");
          setHideDbMessage(false);
        }
      })
      .catch(error => {
        console.log("erreur ==> " + error);
      });
  };

  return (
    <div className="form-container">
      <form
        method="POST"
        className="contact form"
        onChange={e => handleChange(e)}
        onSubmit={e => handleSubmit(e)}
      >
        {!hideDbMessage ? (
          <div className="alert alert-success" role="alert">
            {dbMessage}
          </div>
        ) : (
          ""
        )}
        {/* <Alert className="is-active alert-success">Message envoyé !</Alert> */}
        <h1>Me contacter</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={name} required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={email} required />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="7" ref={message} required></textarea>

        <button
          type="submit"
          className="btn"
          data-toggle="modal"
          data-target="#submit"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageItem,
  localStorageKeys,
  setLocalStorageItem,
} from "../shared/constants";
const initialFormData = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};
const ContactPage = () => {
  const [contactFormData, setContactFormData] = useState(initialFormData);
  const { name, email, phoneNumber, message } = contactFormData;
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      message.trim() !== ""
    ) {
      const contactList =
        getLocalStorageItem(localStorageKeys.CONTACT_LIST) || [];
      contactList.push(contactFormData);
      setLocalStorageItem(localStorageKeys.CONTACT_LIST, contactList);
      setContactFormData(initialFormData);
      navigate("/");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 pb-5"
        style={{ border: "1px solid gray", borderRadius: "5px", width: "50%" }}
      >
        <div className="form-group p-2">
          <label htmlFor="name_textbox">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name_textbox"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="email_textbox">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email_textbox"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="phone_textbox">Phone Number</label>
          <input
            type="phone"
            className="form-control"
            id="phone_textbox"
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="message_textbox">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="message_textbox"
            placeholder="Enter Message"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className="m-2">
          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

import React, { useState } from "react";
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};
const AddContact = ({submitContactForm}) => {
  const [contactFormData, setContactFormData] = useState(initialFormData);
  const { firstName, lastName, email, phoneNumber, address } = contactFormData;
  const handleChange = ({ target: { name, value } }) => {
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" &&
      lastName.trim() === "" &&
      email.trim() === "" &&
      phoneNumber.trim() === "" &&
      address.trim() === ""
    ) {
      return;
    } else {
        submitContactForm(contactFormData)
      setContactFormData(initialFormData);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 py-3 border border-1 rounded my-2"
    >
      <div className="row g-3 p-2">
        <div className="col">
          <label htmlFor="name_textbox">First name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name_textbox"
            placeholder="Enter first name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="name_textbox">Last name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name_textbox"
            placeholder="Enter last name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group p-2">
        <label htmlFor="email_textbox">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email_textbox"
          placeholder="Enter email"
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
          placeholder="Enter phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group p-2">
        <label htmlFor="message_textbox">Address</label>
        <textarea
          type="text"
          className="form-control"
          id="message_textbox"
          placeholder="Enter adress"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddContact;

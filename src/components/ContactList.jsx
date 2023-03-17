import React from "react";

const ContactList = ({ contactList }) => {
  return contactList.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((list, index) => (
          <tr key={index}>
            <td>{`${list?.firstName} ${list?.lastName}`}</td>
            <td>{list?.email}</td>
            <td>{list?.phoneNumber}</td>
            <td>{list?.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1 className="text-center">No records to show!!!</h1>
  );
};

export default ContactList;

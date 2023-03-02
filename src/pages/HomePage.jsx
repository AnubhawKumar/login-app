import React, { useEffect, useState } from "react";
import { getLocalStorageItem, localStorageKeys } from "../shared/constants";

const HomePage = () => {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    const list = getLocalStorageItem(localStorageKeys.CONTACT_LIST) || [];
    setContactList(list);
  }, []);
  return (
    <div className="m-3">
      <h1 className="text-center text-primary mb-3">Contact List</h1>
      {contactList.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((list, index) => (
              <tr key={index}>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>{list.phoneNumber}</td>
                <td>{list.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center">No records to show!!!</h1>
      )}
    </div>
  );
};

export default HomePage;

import React, { useEffect, useRef, useState } from "react";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";
import Loader from "../components/Loader";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  getLocalStorageItem,
  localStorageKeys,
  setLocalStorageItem,
} from "../shared/constants";

const ContactPage = () => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    setContactList(getLocalStorageItem(localStorageKeys.CONTACT_LIST) || []);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const submitContactForm = (formData) => {
    setIsLoading(true);
    timer.current = setInterval(() => {
      setIsLoading(false);
    }, 3000);
    const contacts = getLocalStorageItem(localStorageKeys.CONTACT_LIST) || [];
    contacts.push(formData);
    setLocalStorageItem(localStorageKeys.CONTACT_LIST, contacts);
    setContactList(contacts);
    setShowAddForm(false);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="d-flex flex-column align-items-center mx-5 px-5">
      <div className="d-flex flex-column my-2 w-100">
        <div
          className="border border-1 py-2 mt-2 px-3 rounded bg-dark text-white d-flex justify-content-between align-items-center"
          role="button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <div className="text-uppercase">Add contacts</div>
          {showAddForm ? (
            <AiOutlineMinusCircle className="fs-2 pointer-event" />
          ) : (
            <AiOutlinePlusCircle className="fs-2 pointer-event" />
          )}
        </div>
        {showAddForm && <AddContact submitContactForm={submitContactForm} />}
      </div>
      <div className="mx-5 p-4 w-100 border border-1 rounded">
        <ContactList contactList={contactList} />
      </div>
    </div>
  );
};

export default ContactPage;

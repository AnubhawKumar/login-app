import React, { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import Loader from "../components/Loader";
import { getLocalStorageItem, localStorageKeys } from "../shared/constants";

const HomePage = () => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const list = getLocalStorageItem(localStorageKeys.CONTACT_LIST) || [];
    setContactList(list);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="m-3">
      <h1 className="text-center text-primary mb-3">Contact List</h1>
      <ContactList contactList={contactList}/>
    </div>
  );
};

export default HomePage;

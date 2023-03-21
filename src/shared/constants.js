const localStorageKeys = {
  IS_LOGGED_IN: "IS_LOGGED_IN",
  CONTACT_LIST: "CONTACT_LIST",
  TASK_LIST:"TASK_LIST"
};

const getLocalStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setLocalStorageItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
export {
  localStorageKeys,
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
};

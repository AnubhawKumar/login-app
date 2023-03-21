export const findItemAndUpdateInList = (tasks, task, taskItem) => {
  const updatedList = Array.from(tasks).map((item) => {
    if (item.id === taskItem.id) {
      return { ...item, task: task };
    }
    return item;
  });
  return updatedList;
};
export const completedItem = (list, itemId) => {
  const updatedList = Array.from(list).map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  return updatedList;
};

export const deleteItem = (list, itemId) => {
  const filteredList = Array.from(list).filter((item) => item.id !== itemId);
  return filteredList;
};

export const getAlertMessage = (editTask) => {
  if (!editTask) {
    return "Please add the task! Task can't be empty";
  }
  return `Task can't be empty! you are editting ${editTask.task}`;
};

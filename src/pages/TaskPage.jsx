import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import TasksList from "../components/TasksList";
import {
  getLocalStorageItem,
  localStorageKeys,
  setLocalStorageItem,
} from "../shared/constants";
import Loader from "../components/Loader";
import {
  completedItem,
  deleteItem,
  findItemAndUpdateInList,
  getAlertMessage,
} from "../shared/helper";

const TaskPage = () => {
  const initialTasks = getLocalStorageItem(localStorageKeys.TASK_LIST) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const timer = useRef();

  const updateTask = (taskItem) => {
    const updatedTask = findItemAndUpdateInList(tasks, task, taskItem);
    setTasks(updatedTask);
  };

  const showDelayedAddTask = (task, delay) => {
    const storedtaskList =
      getLocalStorageItem(localStorageKeys.TASK_LIST) || [];
    setLocalStorageItem(localStorageKeys.TASK_LIST, [
      ...storedtaskList,
      { task, id: uuid(), completed: false },
    ]);
    timer.current = setInterval(() => {
      setTasks((prevTask) => [
        ...prevTask,
        { task, id: uuid(), completed: false },
      ]);
      setLoading(false);
    }, delay);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      const message = getAlertMessage(editTask);
      alert(message);
      return;
    }
    if (editTask) {
      updateTask(editTask);
    } else {
      setLoading(true);
      showDelayedAddTask(task, 5000);
    }
    setTask("");
    setEditTask(null);
  };

  const editask = (taskItem) => {
    setEditTask(taskItem);
    setTask(taskItem.task);
  };
  const completeTask = (taskItemId) => {
    const completedTaskList = completedItem(tasks, taskItemId);
    setTasks(completedTaskList);
  };
  const deleteTask = (taskId) => {
    const filteredtask = deleteItem(tasks, taskId);
    setTasks(filteredtask);
  };

  useEffect(() => {
    if (tasks.length === 0) {
      setTask("Fill today's time sheet");
    }
  }, []);

  useEffect(() => {
    setLocalStorageItem(localStorageKeys.TASK_LIST, tasks);
    return () => {
      clearInterval(timer.current);
    };
  }, [tasks]);

  const renderIntsruction = () => {
    return (
      <div className="border border-1 mt-2 px-4 py-2 d-flex flex-column rounded instruction">
        <h5>Instructions</h5>
        <span>- Add -&gt; Add New Tasks</span>
        <span>- Edit -&gt; Edit existing task</span>
        <span>- Done -&gt; If task is completed</span>
        <span>- Delete -&gt; If you want to delete task</span>
      </div>
    );
  };
  return (
    <div className="container mt-2 w-50">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <div className="row bg-dark text-white">
            <div className="col pt-2 pb-1">
              <h4 className="text-uppercase text-center">Task Tracker</h4>
            </div>
          </div>
          {tasks.length === 0 ? renderIntsruction() : null}
          <div className="row justify-content-between text-white pt-1 px-2 pe-3 mt-1">
            <div className="form-group flex-fill mb-2 col-5">
              <input
                id="task-input"
                type="text"
                className="form-control"
                placeholder="Add your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleAddTask}
              className={`btn btn-${
                editTask ? "secondary" : "primary"
              } mb-2 ml-2 col-2`}
            >
              {editTask ? "Save" : "Add"}
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="" id="mx-2 border border-5">
              {tasks.map((tasItem) => (
                <TasksList
                  key={tasItem.id}
                  task={tasItem}
                  editask={editask}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

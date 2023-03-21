import React from "react";
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

const TasksList = ({
  task,
  editask,
  completeTask,
  deleteTask,
  edittingItem,
}) => {
  return (
    <div
      key={task.id}
      className="border border-1 row m-2 p-1 rounded align-items-center bg-light"
    >
      <div
        className={`col-10 wrap text-break ${
          task.completed ? "task-done" : ""
        }`}
      >
        {task.task}
      </div>
      <div className="col">
        <AiFillEdit
          onClick={() => editask(task)}
          className="fs-4 text-primary"
          role="button"
        />
        <AiFillCheckCircle
          onClick={() => completeTask(task.id)}
          className="fs-4 text-success"
          role="button"
        />
        <AiFillDelete
          onClick={() => deleteTask(task.id)}
          className="fs-4 text-danger"
          role="button"
        />
      </div>
    </div>
  );
};

export default TasksList;

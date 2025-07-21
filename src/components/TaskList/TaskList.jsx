import React from "react";
import TaskListNo from "../Others/TaskListNo";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10"
    >
      {data.tasks.map((task, index) => (
        <React.Fragment key={index}>
          {task.newTask && <NewTask data={task} />}
          {task.active && <AcceptTask data={task} />}
          {task.completed && <CompleteTask data={task} />}
          {task.failed && <FailedTask data={task} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;

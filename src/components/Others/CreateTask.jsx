import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const {userData,setUserData} = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [NewTask, setNewTask] = useState({});

  const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    title,
    description,
    date,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  const data = userData.employees;

  data.forEach((elem) => {
    if (assignTo === elem.firstName) {
      elem.tasks.push(task); 
      elem.taskCount.newTask = elem.taskCount.newTask + 1;
    }
  });

  setUserData({ employees: data });
  localStorage.setItem("employees", JSON.stringify(data));

  setTitle('');
  setAssignTo('');
  setCategory('');
  setDate('');
  setDescription('');
};

  return (
    <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full  items-start justify-between"
      >
        <div className="w-1/2 pl-10">
          <div>
            <h3 className="tex-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-sm mb-4 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="tex-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="text-sm mb-4 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="tex-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm mb-4 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
            />
          </div>
          <div>
            <h3 className="tex-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              id="Category"
              type="text"
              placeholder="Enter the category"
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="tex-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name="Description"
            id="Description"
            cols="22"
            rows="8"
            placeholder="Enter the description"
            className="w-[80%] h-35 text-sm px-2 py-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-600 p-3 rounded text-sm mt-4 w-[80%]  ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
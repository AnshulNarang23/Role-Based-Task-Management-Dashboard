import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const {userData,setUserData} = useContext(AuthContext);
  // console.log(authData.employees)

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-60 ">
      <div className="flex justify-between mb-2 rounded bg-red-400 py-2 px-4">
        <h2 className="w-1/5 font-meduim">Employee Name</h2>
        <h3 className="w-1/5 font-meduim">New Task</h3>
        <h5 className="w-1/5 font-meduim">Ongoing Task</h5>
        <h5 className="w-1/5 font-meduim">Completed</h5>
        <h5 className="w-1/5 font-meduim">Failed</h5>
      </div>
      <div id="alltask" className="h-[80%] overflow-auto">
        {userData?.employees?.map(function (elem, idx) {
          return (
            <div key={idx} className="flex justify-between mb-2 rounded bg-gray-800 py-2 px-4">
              <h2 className="w-1/5 font-medium text-white" style={{ color: "white" }}>
                {elem.firstName}  
              </h2>
              <h3 className="w-1/5 font-medium text-blue-700" style={{ color: "#1d4ed8" }}>
                {elem.taskCount.newTask}
              </h3>
              <h5
                className="w-1/5 font-medium text-yellow-600"
                style={{ color: "#ca8a04" }}
              >
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 font-medium text-green-700" style={{ color: "#15803d" }}>
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 font-medium text-red-700" style={{ color: "#b91c1c" }}>
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

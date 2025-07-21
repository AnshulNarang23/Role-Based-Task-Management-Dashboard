import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))?.data;

  const handleAccept = () => {
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.id === loggedInUser.id) {
        const updatedTasks = employee.tasks.map((task) => {
          if (
            task.title === data.title &&
            task.description === data.description &&
            task.date === data.date
          ) {
            return {
              ...task,
              active: true,
              newTask: false,
            };
          }
          return task;
        });

        const updatedTaskCount = {
          ...employee.taskCount,
          active: employee.taskCount.active + 1,
          newTask: employee.taskCount.newTask - 1,
        };

        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: updatedTaskCount,
        };
      }
      return employee;
    });

    const updatedData = { ...userData, employees: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-violet-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-m mt-3'>{data.description}</p>
      <div className='mt-4 '>
        <button
          className='bg-blue-500 py-1 px-2 text-sm w-full'
          onClick={handleAccept}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const {userData,setUserData} = useContext(AuthContext);

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedInUser')
    
    if(loggedUser){
      const userData = JSON.parse(loggedUser)
      // console.log(userData)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])
  
  
const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  } else if (userData?.employees) {
    const employee = userData.employees.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUser(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Login Credentials");
    }
  } else {
    alert("No user data found");
  }
};


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUser} />}
    </>
  );
};

export default App;

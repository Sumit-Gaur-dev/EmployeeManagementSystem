import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData] = useState(null); 
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  
  const handleLogin = (email, pass) => {
    
    if (email === 'admin@me.com' && pass === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return; 
    }
    
    console.log(authData);
    if (authData) {
      const employee = authData.employees.find((user) => 
        email === user.email && pass === user.password
    );
    console.log(employee);
    if (employee) {
      setUser("employee"); 
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }) 
      );
      return; 
    }
    }
    alert("Invalid email or password");
  };

  
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
}
export default App;

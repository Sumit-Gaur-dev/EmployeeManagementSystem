import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

function AdminDashboard(){
    return(
        <div className="p-10 bg-[#1c1c1c] h-screen">
         <Header />
         <CreateTask/>
        </div>
    )
}
export default AdminDashboard;
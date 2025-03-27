import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


function CreateTask() {
   const authData = useContext(AuthContext);
   // const [authData,setAuthData] = useState(useContext(AuthContext)); 
    const [assignPerson,setAssignPerson] =useState(""); 
    const [newTaskData,setNewTaskData] =useState({
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "",
        taskDescription: "",
        taskDate: "",
        category: ""});

    const assignPersonHandler = (e) =>{
      setAssignPerson(e.target.value);
    }

    const inputChangeHandler = (e,value)=>{
        setNewTaskData(prev => ({
            ...prev,
            [value]: e.target.value
        }));
    }
    const submitHandler= (e)=>{
        e.preventDefault();
        const getUser = authData.employees.find((e)=>assignPerson === e.firstName );
        getUser.tasks.push(newTaskData);
        authData.employees.forEach((data,indx)=>{
            if(data.firstName === assignPerson){
               data === newTaskData;
            }
        })
        localStorage.setItem("employees",JSON.stringify(authData));
        console.log("done");

    }


    return(<div>
         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e)=>submitHandler(e)}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={newTaskData.taskTitle}
                            onChange={(e)=>inputChangeHandler(e,"taskTitle")}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                          value={newTaskData.taskDate}
                          onChange={(e)=>inputChangeHandler(e,"taskDate")}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            onChange={(e)=>assignPersonHandler(e)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={newTaskData.category}
                            onChange={(e)=>inputChangeHandler(e,"category")}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={newTaskData.taskDescription} onChange={(e)=>inputChangeHandler(e,"taskDescription")} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    </div>)
}
export default CreateTask;
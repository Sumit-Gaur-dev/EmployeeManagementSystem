import React, { useState } from "react";

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log("email = ",email);
      console.log("pass" , pass);
      setEmail("");
      setPass("");
    }
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border-2 p-20 rounded-xl  border-emerald-600  ">
               <form onSubmit={(e)=> submitHandler(e)} className="flex flex-col justify-center items-center">
                  <input
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   required 
                   className="m-1 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                   type="email"
                   placeholder="enter your email" />
                  <input
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)}
                   required
                   className="m-1 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                   type="password"
                   placeholder="enter your password"/>
                  <button type="submit" className="mt-5 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">Login</button>
               </form>
            </div>
        </div>
    )
}
export default Login;
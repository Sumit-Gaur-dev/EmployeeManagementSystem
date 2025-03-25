import React from "react";

function Header(){
    // to EmployDashboard
    return(
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'> Hi  <br /> <span className='text-3xl font-semibold'>Srthak 👋</span></h1>
            <button className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>LogOut</button>
        </div>
    )
}
export default Header;
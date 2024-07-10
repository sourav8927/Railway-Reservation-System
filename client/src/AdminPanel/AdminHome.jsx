import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { FaUsers,FaHome } from "react-icons/fa";
import { IoIosContacts} from "react-icons/io";
import { FcServices } from "react-icons/fc";
import { useAuth } from '../store/Auth';



const AdminHome = () => {
 const {user,isLoading}= useAuth();
 console.log("Admin user Data",user)

//  if(isLoading){
//   return <h1>Loading...</h1>
//  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }



  return (
    <div className='flex h-screen'>
        <div className='bg-blue-400 p-4 h-screen'>
      <ul className='items-center justify-center '>
        <NavLink to="/admin">
        <button className='bg-orange-500 border w-[100%] rounded-md px-2 items-center text-center flex'>
        <FaHome />Insert Train
        </button>
        </NavLink>

        <NavLink to="/admin/users"><button className='bg-orange-500 border w-[100%] rounded-md px-2 items-center text-center flex'> <FaUsers />Users</button></NavLink>
        {/* <NavLink to="/admin/contacts"><li className='flex'><IoIosContacts />Contacts</li></NavLink> */}
        {/* <NavLink to="/admin/services"><li className='flex'><FcServices />Services</li></NavLink> */}
       

      </ul>
        
        </div>
      <Outlet/>
    </div>
  )
}

export default AdminHome

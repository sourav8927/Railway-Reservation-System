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
    <div className='flex'>
        <div className='bg-slate-400 p-10 h-screen'>
      <ul className='items-center justify-center '>
        <NavLink to="/admin"><li className='flex'><FaHome />Home</li></NavLink>
        <NavLink to="/admin/users"><li className='flex'> <FaUsers />Users</li></NavLink>
        {/* <NavLink to="/admin/contacts"><li className='flex'><IoIosContacts />Contacts</li></NavLink> */}
        {/* <NavLink to="/admin/services"><li className='flex'><FcServices />Services</li></NavLink> */}
        <NavLink to="/admin/insertTrain"><li className='flex'> <FaUsers />Insert Trains</li></NavLink>

      </ul>
        
        </div>
      <Outlet/>
    </div>
  )
}

export default AdminHome

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/Auth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [user, setuser] = useState({
    email:"",
    password:"",
  })  

  const [visible, setvisible] = useState(false)

  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value

    setuser({
      ...user,
      [name]:value
    })
  }
// for navigator
const navigate= useNavigate();
// for call the Auth.jsx using useContext
const {storeTokenInLs}=useAuth();


  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(user);

    try {
      const loginURL= "http://127.0.0.2:3000/api/auth/login";
      const response=await fetch(loginURL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
      });
      console.log(response);

      const res_data= await response.json();
      console.log("response data",res_data);

      if(response.ok){
        console.log("login successful");
        toast.success("Login successfull");
        navigate("/")


        //store in local storage
        // localStorage.setItem("token",res_data.token)
        storeTokenInLs(res_data.token);
      }else{
        console.log("Invalid credentials")
        toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
    {/* <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols"> */}
          {/* for image part
          <div className="registration-image">
            <img src="" alt="" />
          </div> */}
          
          {/* for registration form */}
          <div className="md:w-[20vw] p-5 space-y-6 bg-white shadow-md rounded-lg ">
            <h1 className="text-2xl font-bold text-center">Login form</h1>
            <br />

            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                
                {/* for email */}
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">email</label>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                {/* for password */}
                <label htmlFor="username">password</label>
                <div>
                <input
                  type={visible?"text":"password"}
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <div className=" mt-2.5 ml-2 text-gray-600 " onClick={()=>{setvisible(!visible)}}>
                          {visible? <FaEye />:<FaEyeSlash />}
                      </div>
                </div>

              </div>
              <br />
              <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login now</button>
            </form>
          </div>
        {/* </div>
      </div>
    </main> */}
  </section>
  )
}

export default Login

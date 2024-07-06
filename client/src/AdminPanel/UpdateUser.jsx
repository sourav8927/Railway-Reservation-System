import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../store/Auth';


const UpdateUser = () => {
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
      });

      const navigate= useNavigate()
      const {UserAuthorization} =useAuth();
      const params= useParams();
      console.log("params",params)

      const getUserDataById= async()=>{
        try {
            const response= await fetch(`http://127.0.0.2:3000/api/admin/users/${params.id}`,{
                method:"GET",
                headers: {
                    Authorization: UserAuthorization,
                  },
            });
            const data= await response.json();
            console.log("User data for update page",data.user);
            setuser(data.user);
        } catch (error) {
            console.log(error)
        }
      }

      useEffect(() => {
        getUserDataById();
      }, [])

      const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setuser({
          ...user,
          [name]: value,
        });
      };

      const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response= await fetch(`http://127.0.0.2:3000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: UserAuthorization,
                },
                body:JSON.stringify(user),
            });
            console.log("response",response);
            const updatedData= await response.json();
            if(response.ok){
                toast.success("User data Updated successfully!");
                navigate("/admin/users")
            }else{
                toast.error("User data not Updated");
            }
           
        } catch (error) {
            console.log(error);
        }
        
      }

  return (
    
      <section className=" h-screen ">
        <main >
          <div className="section-registration ">
            <div className="container grid grid-two-cols ">
              {/* for image part */}
              <div className="registration-image">
                <img src="" alt="" />
              </div>

              {/* for registration form */}
              <div className="registration-form  bg-slate-200 mt-20   md:w-[30vw]  m-auto rounded-2xl shadow-2xl">
                <h1 className="main-heading text-center text-2xl font-bold text-blue-800  pt-10 pb-5">
                  Update user Data
                </h1>
                <br />

                <form
                  action=""
                  onSubmit={handleSubmit}
                  className=" px-10 pb-10 "
                >
                  <div className="space-y-5 ">
                    {/* for username */}
                    <div className="space-y-2 ">
                      <label htmlFor="username" className="">
                        Name
                      </label>
                      <br />
                      <div
                        className="flex rounded  hover:ring-1   w-full"
                      >
                        <input
                          type="text"
                          name="username"
                          placeholder="Ex: Rohan roy"
                          id="username"
                          required
                          autoComplete="off"
                          value={user.username}
                          onChange={handleInput}
                          className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                        />
                        <FaUser className="absolute mt-2.5 ml-2 text-gray-400 " />
                      </div>
                    </div>

                    {/* for email */}
                    <div className="space-y-2">
                      <label htmlFor="username">email</label>
                      <br />
                      <div className="flex rounded  hover:ring-1   w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Ex: rohan123@gmail.com"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                      />
                      <MdEmail className="absolute mt-2.5 ml-2 text-gray-400 "/>
                      </div>
                    </div>

                    {/* for phone number */}
                    <div className="space-y-2">
                      <label htmlFor="username">phone</label>
                      <br />
                      <div className="flex rounded  hover:ring-1   w-full">
                      <input
                        type="number"
                        name="phone"
                        placeholder="phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        className="black flex-1 border-0 
                      py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6 "
                      />
                      <FaPhoneAlt className="absolute mt-2.5 ml-2 text-gray-400 "/>
                      </div>
                    </div>

                    
                  </div>
                  <br />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-submit m-auto bg-blue-800  py-2 mt-5 font-bold w-full rounded-md text-white"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    
  )
}

export default UpdateUser


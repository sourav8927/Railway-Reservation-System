import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"


const InsertTrain = () => {
  const [selectedOption, setselectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // for navigate to another page
  const navigate= useNavigate();
  //for posting the job to database
  const fetchData= async(data)=>{
    const url = 'http://127.0.0.2:3000/api/trainsRoutes/insertTrain';
  const options = {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  };
  
  try {
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(result);
    if(result.acknowledged){
        navigate("/")
    }
    if(response.ok){
      alert("successfully added");
    }
  } catch (error) {
    console.error(error);
  }
  }
  
  const onSubmit = (data) => {
     data.skills=selectedOption;
    // console.log(data);
    fetchData(data)

  };
  

  console.log(watch("example"));
  return (
    <div className="  max-w-screen-2xl container mx-auto xl:px-24 px-4 my-10  ">
      <div className="text-center">
      <h1 className="font-bold text-3xl mb-4 text-orange-500">Insert the Train</h1>

      </div>
    {/* form */}
    <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 0th row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Train No
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="number"
              {...register("TrainNo")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Train Name
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="text"
              {...register("TrainName")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* 1st row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Source
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="text"
              defaultValue={"Burdhaman"}
              {...register("Source")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Destination
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="text"
              defaultValue={"Durgapur"}
              {...register("Destination")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Arrival
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="time"
              defaultValue={"12:00 pm"}
              {...register("Arrival")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Departure
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="time"
              defaultValue={"2:00 pm"}
              {...register("Departure")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 "
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Train Type
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <select {...register("TrainType")} className="create-job-input">
              <option value="">Choose Train type</option>
              <option value="Runs-Daily">Runs Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Ticket Fee
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="text"
              placeholder="70"
              {...register("TicketFee")}
            />
          </div>
        </div>

        {/* 4th row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Train for Date
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <input
              type="date"
              placeholder="Ex: 2023-10-28"
              {...register("postingDate")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
              Train available for
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <select
              {...register("TrainAvailableFor")}
            >
              <option value="">Select Train available for</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
            </select>
          </div>
        </div>

      

        {/* 6th row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label htmlFor="" className="block mb-2 text-lg">
               Choose fare class
            </label>
            {/* input css {block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 } */}
            <select
              {...register("ChooseFareClass")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 "
            >
              <option value="">Select fare class</option>
              <option value="GN-Unreserved">GN-Unreserved</option>
              <option value="SL-Sleeper">SL-Sleeper</option>
              <option value="AC 3-Tier">AC 3-Tier</option>
              <option value="AC 2-Tier">AC 2-Tier</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div className="w-full">
        <label htmlFor="" className="block mb-2 text-lg">
            Train Posted By
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("TrainPostedBy")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
              text-gray-900 placeholder:text-gray-900 focus:outline-none sm:text-sm sm:leading-6 "
            />
        </div>
        </div>

        
        <div className="">
        <input
          type="submit"
          className="block mt-12 bg-blue-700 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer  "
        />
        </div>
      </form>
    </div>
  </div>
  )
}

export default InsertTrain

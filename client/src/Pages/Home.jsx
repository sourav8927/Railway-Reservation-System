// import React, { useState, useEffect } from "react";
// import { FiMapPin, FiSearch } from "react-icons/fi";
// import TrainSearchForm from "../Components/TrainSearchForm";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoMdTrain } from "react-icons/io";
// import { MdLocationPin } from "react-icons/md";
// import { MdCurrencyRupee } from "react-icons/md";
// import { IoMdSwap } from "react-icons/io";
// import { BiSolidTrain } from "react-icons/bi";
// import { FaSearch } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";

// const Home = ({ query, handleInputChange }) => {
//   const [trains, setTrains] = useState([]);
//   const {id}=useParams();
//   const fetchData = async () => {
//     const URL = "http://127.0.0.2:3000/api/trainsRoutes/trains";
//     const response = await fetch(URL, {
//       method: "GET",
//     });

//     const trainData = await response.json();
//     console.log(trainData.allTrains);
//     setTrains(trainData.allTrains);

//     // if(response.ok){
//     //   alert("trains fetched")
//     // }
//   };

//   // const fetchTrainData = async () => {
//   //   const URL = "http://127.0.0.2:3000/api/trainsRoutes/booktrain/";
//   //   const response = await fetch(URL, {
//   //     method: "GET",
//   //   });

//   //   const trainData = await response.json();
//   //   console.log(trainData.allTrains);
//   //   setTrains(trainData.allTrains);

//   //   // if(response.ok){
//   //   //   alert("trains fetched")
//   //   // }
//   // };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     // style={{ backgroundImage: "url('/images/railwaybackground.jpg')" }}
//     // min-h-screen bg-custom-bg bg-cover bg-center
//     <div className="text-2xl  max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 bg-gradient-to-r from-[#DEE4EA] to-[#F9FCFF] ">
//       <h1 className="text-center  font-bold text-5xl mb-10 font-sans text-blue-700">
//         Reserve a train for you
//       </h1>

//       {/* seacrhing trains divs */}
//       <div className="">
//         <div className="bg-blue-400 shadow-lg  rounded-lg mt-10 px-10 text-center items-center justify-center">
//           <h1 className="text-white font-serif py-6 text-3xl">Search Train</h1>
//           {/* searching div */}
//           <div className="flex w-full grid-flow-row">
//             {/* from station */}
//             <div
//               className="flex  rounded-lg  ring-1 ring-inset ring-gray-300
//             focus-within:right-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full"
//             >
//               <input
//                 type="text"
//                 name="fromStation"
//                 id="fromStation"
//                 placeholder="From Station"
//                 className=" flex-1 border-none rounded-lg
//                 py-3 pl-8 text-gray-900 placeholder:text-gray-400 font-bold text-2xl focus:right-0 sm:text-sm sm:leading-6"
//               />
//             </div>
//             {/* swap icon */}
//             <div className="p-2">
//               <IoMdSwap className="size-10 text-white hover:text-blue-600" />
//             </div>
//             {/* to station */}
//             <div
//               className="flex rounded-lg  ring-1 ring-inset ring-gray-300
//             focus-within:right-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full"
//             >
//               <input
//                 type="text"
//                 name="toStation"
//                 id="toStation"
//                 placeholder="To Station"
//                 className="flex-1 border-none rounded-lg
//                 py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 font-bold focus:right-0 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           {/* <TrainSearchForm onSearch={handleSearch} /> */}
//           <button className="bg-blue-800 w-1/2 py-2 rounded-lg text-white shadow-sm hover:bg-[#3572EF] hover:text-gray-400 my-6 text-lg">
//             Find trains
//           </button>
//         </div>
//         {/* Search trains */}
//         <form action="">
//           <div className="flex text-center justify-start md:flex-row flex-col md:gap-0 gap-4 mt-5">
//             {/*for search bar*/}
//             <div
//               className="flex md:rounded-s-sm rounded shadow-sm ring-1 ring-inset ring-gray-300
//             focus-within:right-2 focus-within:ring-inset  w-[30%]  text-center "
//             >
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 placeholder="Train No. /Train Name"
//                 className="black flex-1 border-0 bg-transparent w-[20%]
//                 py-1.5 pl-20 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
//                 onChange={handleInputChange}
//                 value={query}
//               />
//               <BiSolidTrain className="absolute mt-2.5 ml-4 text-blue-600" />
//               <button
//                 type="submit"
//                 className="bg-blue-800 py-2 px-8 text-white md:rounded-s-none rounded flex"
//               >
//                 <FaSearch />
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="TrainsContainer my-4">
//           <h2 className="px-5">Available Trains</h2>
//           {trains.map((train) => {
//             return (
//               <div
//                 key={train._id}
//                 className="card bg-white rounded-2xl shadow-sm p-2"
//               >
//                 <div className="flex space-x-4">
//                   <div className="bg-blue-500 text-white rounded-md px-2 ">
//                     <p className="text-[20px]">{train.TrainNo}</p>
//                   </div>

//                   <div className=" w-full flex justify-between">
//                     <div className="flex space-x-2">
//                       <p className="text-[20px]">{train.Arrival}</p>

//                       <FaArrowRightLong className="size-5 text-gray-600 m-1" />

//                       <p className="text-[20px]">{train.Departure}</p>
//                     </div>

//                     <p className="flex">{train.TrainType}</p>
//                   </div>
//                 </div>
//                 <div className="flex p-2 space-x-3">
//                   <div className="flex ">
//                     <IoMdTrain />
//                     <h2>{train.Source}</h2>
//                   </div>
//                   <p className="">to</p>
//                   <div className="flex">
//                     <MdLocationPin />
//                     <h2>{train.Destination}</h2>
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <h1>{train.TrainName}</h1>
//                   <div className="flex space-x-2 items-center">
//                     <Link to={`/bookticket/${train._id}`}>
//                     <button className="px-4 py-1 bg-orange-500 hover:bg-blue-700 rounded-lg text-white">Book now</button>
//                     </Link>
//                     <span className="h-12 w-[3px] rounded-sm bg-black"></span>
//                     <p className="flex  items-center">
//                       <span>
//                         <MdCurrencyRupee />
//                       </span>
//                       {train.TicketFee}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";
import { MdLocationPin, MdCurrencyRupee } from "react-icons/md";
import { IoMdSwap } from "react-icons/io";
import { BiSolidTrain } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../store/Auth";

const Home = () => {

  const [trains, setTrains] = useState([]);
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const { id } = useParams();

  const { user, isLoading, token } = useAuth();
  if (token && isLoading) {
    return <h1>Loading...</h1>;
  }
  const { isLoggedIn } = useAuth();
  const fetchData = async (from = "", to = "") => {
    const URL = `http://127.0.0.2:3000/api/trainsRoutes/trains?from=${from}&to=${to}`;
    const response = await fetch(URL, {
      method: "GET",
    });

    if (response.ok) {
      const trainData = await response.json();
      setTrains(trainData.allTrains);
    } else {
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData(fromStation, toStation);
  }, [fromStation, toStation]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fromStation") setFromStation(value);
    if (name === "toStation") setToStation(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData(fromStation, toStation);
  };
  const handleSwap = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

  const leftHandleCross=()=>{
    setFromStation("");
    
  }
  const rightHandleCross=()=>{
    setToStation("");
  }
  return (
    <div className="text-2xl max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 bg-gradient-to-r from-[#DEE4EA] to-[#F9FCFF]">
      <h1 className="text-center font-bold text-5xl mb-10 font-sans text-blue-700">
        Reserve a train for you
      </h1>

      <div className="">
        <div className="bg-blue-400 shadow-lg rounded-lg mt-10 px-10 text-center items-center justify-center">
          <h1 className="text-white font-serif py-6 text-3xl">Search Train</h1>
          <form onSubmit={handleSearch}>
            <div className="flex w-full grid-flow-row sm:grid-flow-col ">
              <div className="flex rounded-lg ring-1 ring-inset bg-white ring-white focus-within:right-2 focus-within:ring-inset  md:w-1/2 w-full ">
                <input
                  type="text"
                  name="fromStation"
                  id="fromStation"
                  placeholder="From Station"
                  className="flex-1 border-none rounded-lg py-3 pl-8 text-gray-900 placeholder:text-gray-400 font-bold text-2xl focus:right-0 sm:text-sm sm:leading-6"
                  value={fromStation}
                  onChange={handleInputChange}
                />
                <RxCross2 className=' mt-4 mr-2 text-gray-400'onClick={leftHandleCross}/>
              </div>
              <div className="p-2 cursor-pointer" onClick={handleSwap}>
                <IoMdSwap className="size-10 text-white hover:text-blue-600" />
              </div>
              <div className="flex border-none rounded-lg ring-1 ring-inset bg-white ring-white focus-within:right-2 focus-within:ring-inset  md:w-1/2 w-full ">
                <input
                  type="text"
                  name="toStation"
                  id="toStation"
                  placeholder="To Station"
                  className="flex-1 border-none rounded-lg py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 font-bold focus:right-0 sm:text-sm sm:leading-6"
                  value={toStation}
                  onChange={handleInputChange}
                />
                <RxCross2 className=' mt-4 mr-2 text-gray-400' onClick={rightHandleCross}/>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-800 w-1/2 py-2 rounded-lg text-white shadow-sm hover:bg-[#3572EF] hover:text-gray-400 my-6 text-lg"
            >
              Find trains
            </button>
          </form>
        </div>
        {/* Search trains */}
        <form action="">
          <div className="flex text-center justify-start md:flex-row flex-col md:gap-0 gap-4 mt-5">
            {/*for search bar*/}
            <div
              className="flex md:rounded-s-sm rounded shadow-sm ring-1 ring-inset ring-gray-300
            focus-within:right-2 focus-within:ring-inset  w-[30%]  text-center "
            >
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Train No. /Train Name"
                className="black flex-1 border-0 bg-transparent w-[20%]
                py-1.5 pl-20 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
              <BiSolidTrain className="absolute mt-2.5 ml-4 text-blue-600" />
              <button
                type="submit"
                className="bg-blue-800 py-2 px-8 text-white md:rounded-s-none rounded flex"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
        <div className="TrainsContainer my-4 overflow-y-scroll max-h-96">
          <h2 className="px-5">Available Trains</h2>
          {trains
            .filter(
              (train) =>
                train.Source.toLowerCase().includes(
                  fromStation.toLowerCase()
                ) &&
                train.Destination.toLowerCase().includes(
                  toStation.toLowerCase()
                )
            )
            .map((train) => (
              <div
                key={train._id}
                className="card bg-white rounded-2xl shadow-sm p-2"
              >
                <div className="flex space-x-4">
                  <div className="bg-blue-500 text-white rounded-md px-2">
                    <p className="text-[20px]">{train.TrainNo}</p>
                  </div>

                  <div className="w-full flex justify-between">
                    <div className="flex space-x-2">
                      <p className="text-[20px]">{train.Arrival}</p>
                      <FaArrowRightLong className="size-5 text-gray-600 m-1" />
                      <p className="text-[20px]">{train.Departure}</p>
                    </div>
                    <p className="flex">{train.TrainType}</p>
                  </div>
                </div>
                <div className="flex p-2 space-x-3">
                  <div className="flex">
                    <IoMdTrain />
                    <h2>{train.Source}</h2>
                  </div>
                  <p className="">to</p>
                  <div className="flex">
                    <MdLocationPin />
                    <h2>{train.Destination}</h2>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h1>{train.TrainName}</h1>
                  <div className="flex space-x-2 items-center">
                    {isLoggedIn ? (
                      <Link to={`/bookticket/${train._id}`}>
                      <button className="px-4 py-1 bg-orange-500 hover:bg-blue-700 rounded-lg text-white">
                        Book now
                      </button>
                    </Link>
                    ): (<Link to="/register">
                      <button className="px-4 py-1 bg-orange-500 hover:bg-blue-700 rounded-lg text-white">
                        Book now
                      </button>
                    </Link>)}
                
                    <span className="h-12 w-[3px] rounded-sm bg-black"></span>
                    <p className="flex items-center">
                      <span>
                        <MdCurrencyRupee />
                      </span>
                      {train.TicketFee}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

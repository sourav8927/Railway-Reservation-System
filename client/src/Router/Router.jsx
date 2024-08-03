import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import MyTicket from "../Pages/MyTicket";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import AdminHome from "../AdminPanel/AdminHome";
import AdminUsers from "../AdminPanel/AdminUsers";
import InsertTrain from "../AdminPanel/InsertTrain";
import UpdateUser from "../AdminPanel/UpdateUser";
import BookTicket from "../Pages/BookTicket";
import PayBill from "../Pages/PayBill";
import { createBrowserRouter } from "react-router-dom";
// import FinalBill from "../Components/FinalBill";
import BookingCancle from "../Components/BookingCancle";

const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/myticket',
                element:<MyTicket/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/logout',
                element:<Logout/>
            },
            {
                path:"/bookticket/:id",
                element:<BookTicket/>
              },
            {
                path:'/admin',
                element:<AdminHome/>,
                children:[
                    {
                        path:'users',
                        element:<AdminUsers/>,
                    },
                    // {
                    //     path:'contacts',
                    //     element:<AdminContacts/>
                    // },
                    // {
                    //     path:'services',
                    //     element:<AdminServices/>
                    // },
                    {
                        index: true, // This will render DefaultAdminPage when path is exactly /admin
                        element: <InsertTrain/>, 
                      },
                ]
            },
            {
                path:'/admin/users/update/:id',
                element:<UpdateUser/>
            },
            {
                path:'/payBill/:id/:total',
                element:<PayBill/>
            },
            // {
            //     path:'/finalbill',
            //     element:<FinalBill/>
            // },
            {
                path:'/bookingcancle',
                element:<BookingCancle/>
            }
        ]
       }
    ]);
    
    export default router;
    
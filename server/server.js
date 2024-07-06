require('dotenv').config();
const express= require("express");
const cors=require("cors");
const app=express();
// const {createServer}=require('node:http');
const authRouter = require("./router/auth-router");
const contactRouter=require("./router/contact-router");
const serviceRouter= require("./router/service-router");
const adminRouter=require("./router/admin-router");
const trainRouter=require("./router/train-route");
const bookTrain=require("./router/bookTrain-router");
//mongodb connection
const connectDb= require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

app.use(cors());
app.use(express.json());
//routes
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/services",serviceRouter);
app.use("/api/admin",adminRouter);
app.use("/api/trainsRoutes",trainRouter);
app.use("/api/trainBooking",bookTrain);
//calling error middleware
app.use(errorMiddleware);

const PORT=3000;
const hostname='127.0.0.2';

connectDb().then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Server is running at http://${hostname}:${PORT}/`);
    });

});
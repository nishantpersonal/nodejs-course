const express=require('express');
const appMiddleWare=require('./middleware/appMiddleWare');

const userRoute=require('./routes/user-route');

const morgan=require('morgan');
const bodyParser=require('body-parser');

const app=express();//creating  server

// app.use(bodyParser.json());

app.use(morgan('dev'));

//App level MIddleware----This function is executed on every api call
app.use(appMiddleWare.simpleMiddleWare);

// Route level Middleware----This function is executed on this api call
app.use("/user",userRoute);

app.listen(3000,()=>{
    console.log("server is running");
});
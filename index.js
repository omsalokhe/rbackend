const express=require('express')
const app=express()
// const port=3000
require('dotenv').config()
app.get("/",(req,res)=>{
    res.send("hello !there");
})
app.get("/123",(req,res)=>{
    res.send("i am on new url!!!")
})
app.listen(process.env.PORT,()=>{
    console.log(`the app is running on the port ${process.env.PORT}`)
})
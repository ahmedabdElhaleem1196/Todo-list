const express= require('express')
const bodyParser=require('body-parser')
const mongoose = require("mongoose")
const taskRouter = require('./Routers/task')



const index = express()
index.use(bodyParser.json()) // to support JSON-encoded bodies
const uri = "mongodb+srv://a7med:ahmed333@cluster0.3k01g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
    try {
      mongoose.set('strictQuery', false)
      mongoose.connect(uri)
      console.log("connected to Database")
  
  
    } catch (error){
      console.log(" not connected to Database" , error)
      process.exit()
    }
  }
  connectToDB()
  index.use('/', taskRouter)

index.listen(4500, ()=>{
  console.log("server is running on port 4500")
})

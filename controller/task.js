const task =require('../Schemas/task')
const taskSchema =require('../Schemas/task')


exports.getAllTasks= async function(req,res){
    try{
       const tasks =await taskSchema.find()
       res.json({message:"all tasks are shown succsessfully" ,tasks})
    } catch(err){
        res.status(400).json({message:"somthing went wrong" , err})

    }

}
exports.creatTask= async function(req,res){
    try{
        const createtask =await taskSchema.create(req.body)
        res.json({message:"task is created succsessfully" ,data: createtask})

 
    } catch(err){
        res.status(400).json({message:"somthing went wrong" , err})


    }
}
exports.deleteTask= async function(req,res){
    try{
       const task = await taskSchema.findByIdAndDelete(req.params.id)
        res.json({message:"Deleted succsessfully" ,data: []})

    } catch(err){
        res.status(400).json({message:"somthing went wrong" , err})

    }
}
exports.updateTask = async function(req,res){
    try{
       await taskSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"task is updated succsessfully", data: []})

    } catch(err){
        res.status(400).json({message:"somthing went wrong" , err})

    }
}

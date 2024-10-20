const express = require('express')
const Routers = express.Router()
const taskController = require('../controller/task')


Routers.get('/api/task' ,taskController.getAllTasks)
Routers.post('/api/task' , taskController.creatTask)
Routers.delete('/api/task/:id' , taskController.deleteTask)
Routers.put('/api/task/:id' , taskController.updateTask)




module.exports = Routers

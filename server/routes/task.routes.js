const TaskController=require('../controllers/task.controller')

module.exports=function(app){
    app.post('/api/task/new',TaskController.createTask)
}
const {Task}=require('../models/task.model');

module.exports.createTask=(request,response)=>{
    const {name,user}=request.body;
    Task.create({
        name,user
    })
    .then(task=>response.json(task))
    .catch(err=>response.status(400.6).json(err))
}
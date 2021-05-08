const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'El nombre de la tarea es obligatorio'],
        minlength:[3,'El nombre de la tarea debe tener al menos 3 caracteres']
    },
    user:{
        type:String,
        required:[true,'El usuario es obligatorio'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'El correo debe estar en formato correcto']
    },
    is_done:{
        type:Boolean,
        default:false
    }
})

module.exports.Task=mongoose.model('Task',TaskSchema);
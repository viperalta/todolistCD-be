const mongoose=require('mongoose');
 
mongoose.connect('mongodb://localhost/taskdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Conexión a la base de datos establecida'))
.catch(erro=>console.log('Error con db',err))
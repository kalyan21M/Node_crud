const todomodel = require('../Model/todomodel')
const todoModel = require('../Model/todomodel')
const gettodos = (req,res) =>{
   todoModel.find((err,result)=>{
    if(err){
        res.send("no documents found")
    }
    res.json(result)
   })
}

const createtodos = (req,res) =>{
    console.log(req.body)
    const todo = new todoModel({
        title:req.body.title,
        description:req.body.description,
        completed:req.body.completed
    })
    todo.save((err,result)=>{
        if(err){
            res.send(err)
        }
        res.json(result)
    })
}
const updateTodos = (req,res) =>{
    todoModel.findOneAndUpdate(
        {
            _id:req.params.todoID
        },
       { $set:{
            title:req.body.title,
            description:req.body.description,
            completed:req.body.completed
        }
        
    },
    { new: true },(err,result)=>{
        if(err){
            res.send("no record to update")
        }
        res.json(result)
    }
    )
}

const todoDelete = (req,res)=>{
    todomodel.deleteOne({_id:req.params.todoID})
    .then(()=>{
        res.send({message:"Delted the record"})
    })
    .catch((err)=>{
        res.send({error:`you get ${err}`})
    })
}

module.exports = {gettodos,createtodos,updateTodos,todoDelete}
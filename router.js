const router = require('express').Router()

const {gettodos,createtodos,updateTodos,todoDelete} = require('./controllers/todoController')

router.get('/',(req,res)=>{
    res.send("lets start the prepearation")
})

router.get('/todos',gettodos)

router.post('/createtodos',createtodos)

router.put('/updateTodos/:todoID',updateTodos)

router.delete('/deletetodo/:todoID',todoDelete)

module.exports = router
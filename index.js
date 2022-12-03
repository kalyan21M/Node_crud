const express = require('express')

const port = 8000

const app = express()

const router = require('./router')

const mongoose = require('mongoose')

const cors=require('cors')
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)
//5Mh7jOJg0JvGYMWJ

mongoUrl="mongodb+srv://kalyan:5Mh7jOJg0JvGYMWJ@cluster0.alatux9.mongodb.net/test?retryWrites=true&w=majority"
app.listen(port, async ()=>{
    console.log(`server Running on port ${port}`)
})

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connected to Mongodb")
})
.catch((err)=>{
    console.log(`you got ${err}`)
})
const express= require('express')
const mongoose= require('mongoose')
const cors  =  require('cors')
const app = express()
const PORT = 8000

//
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())


// connection

mongoose.connect('')
.then(()=> console.log('mongoDb Connected'))
//schema
const userSchema = new mongoose.Schema({
    eventname : {type :String , required : true},
    eventCato : {type : String , required  : true},
    eventDate : {type : String , required : true},
    seats = {type : Number , required : true},
    address : {type : String , required : true},
    evenText  : {type : String , required : true}
}, {timestamps : true})

//model

const USER = new mongoose.model('EVENTS' , userSchema)


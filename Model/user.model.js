const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    bio:String,
    name:String,
    phone:String,
    image:String
})

const User=mongoose.model("users",userSchema)

module.exports=User
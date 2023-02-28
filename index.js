require("dotenv").config()

const express=require("express")
const cors=require("cors")
const connect=require("./Config/Config")
const classifieds =require("./Routes/product.route")
const user=require("./Routes/user.route")
//routes


const app=express()

app.use(express.json())
app.use(cors())

app.use("/user",user)
//route use
app.use("/classifieds",classifieds )





app.get("/",(req,res)=>
{
    res.send("Welecome to server")
})


app.listen(process.env.PORT,async()=>
{
    await connect
    console.log("Server started")
})
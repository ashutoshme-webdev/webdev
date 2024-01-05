import express from 'express';
import mongoose from "mongoose";

const app= express();

app.use(express.json());

const router = express.Router();

mongoose.connect(process.env.MONGO_URI,{
    dbName: "backendapi",
}).then(()=>console.log("Database connected"))
.catch(e=>console.log(e));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User",schema);


app.get("/",(req,res)=>{
    res.send("hi")
})

app.get("/users/all",async (req,res)=>{

    const users = await User.find({})
    res.json({
        success: true,
        users: users,
    })
})

app.post("/users/new",async (req,res)=>{
    const {name,email,password} = req.body;
    const users = await User.create({
        name: name,
        email: email,
        password: password, 
    })
    res.json({
        success: true,
        users: users,
    })
})
app.listen(3000,()=>
console.log("server is working")
)
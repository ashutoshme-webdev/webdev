import express from "express";
import path from "path";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "backend",
}).then(()=>console.log("Database connected"))
.catch(e=>console.log(e))

// const messageSchema = new mongoose.Schema({
//     name: String,
//     email: String,
// })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
// const Message = mongoose.model("Message",messageSchema)

const User = mongoose.model("User",userSchema)

app.use(cookieParser());
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended: true}))
// app.get("/",(req,res)=>{
//     // res.send("hello")
//     // res.json({
//     //     brand: "Maruti",
//     //     cars: ["Swift","Dezire"],
//     // });
//     // res.send("Hi")
//     // const pathlocation = path.resolve();
//     // console.log(pathlocation);
//     // res.sendFile(path.join(pathlocation,"./index.html"))

//     res.render("index.ejs",{name:"Developer"})
// })
// app.get("/",(req,res)=>{
//     res.render("login.ejs")
// })

const isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies;
    if(token){
        const decoded = jwt.verify(token,"secret");
        // console.log(decoded);
        req.user = await User.findById(decoded._id)
    next();

    }
    else {
        res.redirect("/login")
}
}

app.post("/login",async (req,res)=>{
    const {email,password}= req.body;
    let user = await User.findOne({email})
    if(!user){
        res.redirect("/register")
    }

    const isUser = await bcrypt.compare(password, user.password);

    if(!isUser){
        return res.render("login.ejs", {email,message:"Incorrect Password"})
    }
    const token = jwt.sign({_id:user._id},"secret")
    res.cookie("token",token,{
        httpOnly: true, expires: new Date(Date.now()+60*1000)
    });
    res.redirect("/")
})

app.get("/", isAuthenticated, (req,res)=>{
    // console.log(req.user);
    res.render("logout.ejs",{name:req.user.name})
})

app.get("/register", (req,res)=>{
    res.render("register.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.post("/register",async (req,res)=>{
    const {name, email, password} = req.body; 
    let user = await User.findOne({email});
    if(user){
        return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password,10)
     user = await User.create({
        name: name, 
        email: email,
        password: hashedPassword

    })

    const token = jwt.sign({_id:user._id},"secret")
    // console.log(token);
    // console.log(req.body);
    res.cookie("token",token,{
        httpOnly: true, expires: new Date(Date.now()+60*1000)
    });
    res.redirect("/")
})

app.get("/logout",(req,res)=>{
    res.cookie("token",null,{
       expires: new Date(Date.now())
    });
    res.redirect("/")
})

// app.get("/success",(req,res)=>{
//     res.render("success.ejs")
// })

// app.get("/users",(req,res)=>{
//     res.json({
//         users,
//     })
// })

// app.post("/",(req,res)=>{
//     // console.log(req.body);
//     users.push({username:req.body.name, email:req.body.email})
//     res.redirect("/success")
// })
// app.post("/contact",async (req,res)=>{
//     // console.log(req.body);
//     const {name,email} = req.body
//     await Message.create({name: name, email: email})
//     res.redirect("/success")
// })



// app.get("/add",async (req,res)=>{
//     await Message.create({name: "Arun", email: "arun@gmail.com"}).then(()=>{
//         res.send("sent")
//     })
//     console.log("nice");
// })
// app.get("/",(req,res)=>{
//     const {token} = req.cookies;
//     if(token){
//     res.render("logout.ejs")
//     }
//     else {
//         res.render("login.ejs")
// }
// })


app.listen(5500,()=>{
console.log("Listening to port 5500");
})

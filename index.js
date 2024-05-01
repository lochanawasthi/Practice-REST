const express = require("express");
const app = express();
const port = 8080;
const path =require("path");
const { v4: uuidv4 } = require('uuid');


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts =[
    {
        id:"1a",
        username:"aapnacollege",
        content:"i love coding"
    },
    {
        id:"2a",
        username:"lochanawasthi",
        content:"i love coding alot"
    },
    {
        id:"3a",
        username:"hanuman",
        content:"i am with you"
    }
];

app.get("/posts/new",(req,res)=>{
    
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
let{username,content}=req.body;
let id = uuidv4();
posts.push({id,username,content});
res.redirect("/posts");
});



app.get("/posts/:id",(req, res)=>{
  let {id} = req.params;
  console.log(id);
  res.send("res working");
  let post = posts.find((p) => id === p.id);
  console.log(post);
 res.render("show.ejs",{post});
});



app.get("/posts",(req,res)=>{
    
    res.render("index.ejs",{posts});
});



app.listen(port,()=>{
    console.log("App is lestening:", port);
});


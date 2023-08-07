const express = require('express')
const app = express()

// port no :1300 to 650000  , 1300 vanda tala system la use garxa


// requiring datbase 
require("./model/index")


//setting up ejs, telling nodejs to use ejs
app.set('view engine','ejs')

app.get("/",(req,res) =>{
    res.render('home.ejs',{name:"milan",age:"12"})
});


// using this we can pass the props 
// app.get("/",(req,res) =>{
//     res.render('home.ejs',{name:"milan",age:"12"})
// });


app.get("/about",(req,res)=>{
    res.send("I am in about page")
});

app.get("/contact",(req, res)=>{
    res.send("Contact us at milanbhandari440@gmail.com")
})



app.listen(3000,function(){
    console.log("Node js project has started at port 3000")
})






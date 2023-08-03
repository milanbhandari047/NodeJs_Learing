const express = require('express')
const app = express()

// port no :1300 to 650000  , 1300 vanda tala system la use garxa



app.get("/",(req,res) =>{
    res.send("<h2>Hello world</h2>")
});
app.get("/about",(req,res)=>{
    res.send("I am in about page")
});

app.get("/contact",(req, res)=>{
    res.send("Contact us at milanbhandari440@gmail.com")
})



app.listen(3000,function(){
    console.log("Node js project has started at port 3000")
})






const express = require("express");
const bodyParser= require("body-parser");
const app = express();

app.use(bodyParser.json());







const port = 2500;

app.listen(port,()=>{
    console.log(`server running...${port}`);
})
app.get('/package',(req,res)=>{
    res.send("varen da");
    console.log("logged get....");
})

app.post('/package',(req,res)=>{
    console.log(req.body);
    res.send(req.body.email`` );
    console.log("logged in post....");
})

app.put('/package',(req,res)=>{
    res.send("varen da chinnasamy");
    console.log("logged in put...");

})
app.delete('/package',(req,res)=>{
    res.send("varen da mamey durr");
    console.log("logged in delete...");
})
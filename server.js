const express = require("express");


const app  = express();


app.get("/",(req,res)=>{

    res.send("<h1>It works </h1>")
})


const PORT  = 7000;

app.listen(PORT,()=>{
    console.log(`The Server is up and runing on PORT ${PORT}`);
})
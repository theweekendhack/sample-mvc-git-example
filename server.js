const express = require("express");


const app  = express();


app.get("/",(req,res)=>{

    res.send("<h1>It works </h1>")
});

app.get("/test",(req,res)=>{

    res.json({
        message : "Sample end Point",
        data : ["Jon Snow", "Thanos", "Wonder WOman", "Hulk"]
    })
})

app.get("/blah",(req,res)=>{

    res.json({
        message : "Sample end Point",
        data : ["Jon Snow", "Thanos", "Wonder WOman", "Hulk"]
    })
})


const PORT  = 7000;

app.listen(PORT,()=>{
    console.log(`The Server is up and runing on PORT ${PORT}`);
})
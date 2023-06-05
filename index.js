const express = require("express");

const path = require("path");

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"data")));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req, res, next)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/downloadCV", (req, res, next)=>{
    var filePath = path.join(__dirname,"/data/","PrashantSingh.pdf");
    res.download(filePath);
});

app.post("/contact",(req, res, next)=>{
    console.log(req.body);
    res.status(302).redirect("/#contact");
});

app.get("/login", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"views","login.html"));
});


app.post("/login", (req, res, next)=>{
    console.log(req.body);
    res.status(200).redirect("/");
});






app.listen(port, ()=>{
    console.log(`server got started on port:  ${port}`);
});
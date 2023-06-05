const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req, res, next)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/")







app.listen(port, ()=>{
    console.log(`server got started on port:  ${port}`);
});
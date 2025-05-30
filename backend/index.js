const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())

app.use(
    cors({
        origin:"*"
    })
)

app.get("/",(req,res)=>{
    res.json({data:"hellieo worlds"})
})

app.listen(8000)

module.exports=app


//https://automatic-space-chainsaw-xxwx4w9xrjwcvwv9-8000.app.github.dev/
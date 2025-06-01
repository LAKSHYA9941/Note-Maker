require("dotenv").config()
const config = require("./config.json")


const mongoose = require("mongoose")



mongoose.connect(config.connectionString)

const User = require("./models/user-model")
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())

const jwt = require("jsonwebtoken")
const { authenticateToken } = require("./utilities")

app.use(
    cors({
        origin: "*"
    })
)

app.get("/", (req, res) => {
    res.json({ data: "hellieo worlds" })
})



app.post("/create-account", async (req, res) => {

    const { fullname, email, password } = req.body
    console.log(req.body)

    if (!fullname) {
        return res
            .status(400)
            .json({ error: true, message: "full name is required" });
    }
    if (!email) {
        return res
            .status(400)
            .json({ error: true, message: "Email is required" });
    }
    if (!password) {
        return res
            .status(400)
            .json({ error: true, message: "Password is required" });
    }

    const isUser = await User.findOne({ email: email })

    if (isUser) {
        return res.json({
            error: true,
            message: "user already exists"
        })

    }

    const user = new User({
        fullname,
        email,
        password,
    })

    await user.save()

    const accesstoken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3d" })

    return res.json({
        error: false,
        user,
        accesstoken,
        message: "Registration was a success"
    })


})




app.listen(8000)

module.exports = app


//https://automatic-space-chainsaw-xxwx4w9xrjwcvwv9-8000.app.github.dev/
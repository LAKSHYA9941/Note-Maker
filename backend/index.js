require("dotenv").config();
const config = require("./config.json");

const mongoose = require("mongoose");
mongoose.connect(config.connectionString);

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("./models/user-model");
const Note = require("./models/notes-model");
const { authenticateToken } = require("./utilities");

const app = express();

// ✅ Step 1: Enable CORS FIRST (before routes or headers)
app.use(cors({
  origin: "https://automatic-space-chainsaw-xxwx4w9xrjwcvwv9-5173.app.github.dev", // frontend origin
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Step 2: Handle preflight OPTIONS requests globally
app.options('*', cors());

// ✅ Step 3: Set up express.json after CORS
app.use(express.json());

// ✅ OPTIONAL: Set custom headers (not required if cors() is above)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://automatic-space-chainsaw-xxwx4w9xrjwcvwv9-5173.app.github.dev");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});



app.get("/", (req, res) => {
  res.json({ data: "hellieo worlds" })
})


//creating account 
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

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3d" })

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration was a success"
  })


})

//login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (!email) {
    return res.status(400).json({ message: "Email is required" })
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" })
  }

  const userInfo = await User.findOne({ email: email })

  if (!userInfo) {
    return res.status(400).json({ message: "User not found" })

  }
  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3d" })

    return res.json({
      error: false,
      message: "Login successful!!",
      email,
      accessToken
    })
  } else {
    return res.status(400).json({
      error: true,
      message: "invalid credentials"
    })
  }
})

//get user

app.get("/get-user", authenticateToken, async (req, res) => {
  const { user } = req.user
  const isUser = await User.findOne({ _id: user._id })

  if (!isUser) {
    return res.status(401).json({ error: true, message: "user not found" })
  }

  return res.json({
    user: {
      fullname: isUser.fullname,
      email: isUser.email,
      "_id": isUser._id,
      createdOn: isUser.createdOn
    },
    message: ""
  })
})


//add note api
app.post("/add-note", authenticateToken, async (req, res) => {

  const { title, content, tags } = req.body
  const { user } = req.user


  if (!title) {
    return res.status(400).json({
      error: true,
      message: "Title is required"
    })
  }

  if (!content) {
    return res.status(400).json({
      error: true,
      message: "Content is required"
    })

  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: user._id
    })
    await note.save()

    return res.json({
      error: false,
      note,
      message: "Note added successfully"
    })
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "internal server error"
    })

  }


})

//Edit-Note
app.put("/edit-note/:noteId", authenticateToken, async (req, res) => {
  const noteId = req.params.noteId
  const { title, content, tags, isPinned } = req.body
  const { user } = req.user

  if (!title && !content && !tags) {
    return res.status(400).json({ error: true, message: "No changes provided" })

  }

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id })
    if (!note) {
      return res.status(400).json({ error: true, message: "Note not found" })

    }
    if (title) note.title = title
    if (content) note.content = content
    if (tags) note.tags = tags
    if (isPinned) note.isPinned = isPinned

    await note.save()

    return res.json({ error: false, note, message: "Note updated successfully" })


  } catch (error) {
    return res.status(500).json({ error: true, message: "internal server problem" })
  }
})


//Get all notes
app.get("/getall-notes/", authenticateToken, async (req, res) => {
  const user = req.user
  try {

    const notes = await Note.find({ userId: user._id }).sort({ isPinned: -1 })
    return res.json({ error: false, notes, message: "All notes fetched" })

  } catch (error) {
    return res.status(500).json({ error: true, message: "Internal server error" })

  }
})

//DELETING NOTES
app.delete("/delete-notes/:noteId", authenticateToken, async (req, res) => {
  const noteId = req.params.noteId
  const { user } = req.user

  try {

    const note = await Note.findOne({ _id: noteId, userId: user._id })

    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" })
    }

    await Note.deleteOne({ _id: noteId, userId: user._id })

    return res.json({ error: false, message: "Note deleted!!!" })


  } catch (error) {
    return res.status(500).json({ error: true, message: "Internal server error" })
  }

})


//Update isPinned

app.put("/update-note-pinned/:noteId", authenticateToken, async (req, res) => {
  const noteId = req.params.noteId
  const { isPinned } = req.body
  const { user } = req.user

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id })
    if (!note) {
      return res.status(400).json({ error: true, message: "Note not found" })

    }

    note.isPinned = isPinned || false

    await note.save()

    return res.json({ error: false, note, message: "Note updated successfully" })


  } catch (error) {
    return res.status(500).json({ error: true, message: "internal server problem" })
  }
})






app.listen(8000)

module.exports = app


//https://automatic-space-chainsaw-xxwx4w9xrjwcvwv9-8000.app.github.dev/
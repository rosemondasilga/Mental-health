import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { router as userRouter } from "./routes/user-route.js";

const app = express();
const dbURI = process.env.ATLAS_URI || "";
const PORT = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

//use routers
app.use("/user-route", userRouter); // Use userRouter for user-related routes

app.get("/", (req, res) => {
  console.log("This is root endpoint!");
  res.send("Hello world!");
});

// Signup route
// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Validate input
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     // const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// connect to mongodb atlas cluster
try {
  mongoose.connect(dbURI);
  console.log("Connected to mongodb cluster");
} catch (error) {
  console.error("Mongoose connection error: " + err);
}

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dbURI);
});

// Handle Mongoose connection events
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through app termination");
    process.exit(0);
  });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

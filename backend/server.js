const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database

const connect = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Backend is connected")
        
    } catch (error) {
        console.log("error in mongodb")
        
    }

}

connect()

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});

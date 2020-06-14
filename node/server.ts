import express from "express";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";


// ----------------------------------
// Routes Import
// ----------------------------------
import list from "./routes/list";

// ----------------------------------
// Environment setup
// ----------------------------------
dotenv.config({path: "./configs/.env"});

const {
    PORT = 5000,
    SESS_NAME = "sid",
    SESS_SECRET = "top-secret",
    SESS_LIFETIME = 1000 * 60 * 60 * 2, // 2 hrs
} = process.env;

// ----------------------------------
// Connect to DB
// ----------------------------------
// const connectDB = require("./config/db");
// connectDB();

// ----------------------------------
// Express configuration
// ----------------------------------
const app: any = express();
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(express.urlencoded({extended: true}));

// ----------------------------------
// API Routes
// ----------------------------------
app.use("/api/v1/list", list);

// ----------------------------------
// Express server
// ----------------------------------
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


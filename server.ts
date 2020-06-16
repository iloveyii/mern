import dotenv from "dotenv";
import app from "./express/app";

// ----------------------------------
// Environment setup
// ----------------------------------
dotenv.config({ path: "../node/configs/.env" });
const {
  PORT = 5000,
  SESS_NAME = "sid",
  SESS_SECRET = "top-secret",
  SESS_LIFETIME = 1000 * 60 * 60 * 2, // 2 hrs
} = process.env;

// ----------------------------------
// Express server
// ----------------------------------
const server = app.listen(PORT, () => {
  console.log(
    "  App is running on port %d in %s mode",
    PORT,
    process.env.NODE_ENV ? process.env.NODE_ENV : "prod"
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;

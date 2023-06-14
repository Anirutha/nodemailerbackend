import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { signUpRouter } from "./routes/singnupUser.js";
import { loginRouter } from "./routes/loginUser.js";
import{passwordResetRouter} from "./routes/passwordReset.js";
import { MongoConnect } from "./db.js";

dotenv.config();

//database connection
MongoConnect()

const PORT = process.env.PORT;
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/signup", signUpRouter);
app.use("/api/login",loginRouter); 
app.use("/api/password-reset",passwordResetRouter); 


app.listen(9000, () => console.log(`Listening to port 9000`)); 
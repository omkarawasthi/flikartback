import express from "express";
import Connection from "./database/database.js";
import dotenv from "dotenv";
import CreateDatabase from "./Controller/createDatabase.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Router);
const PORT = process.env.PORT || 8000;




Connection();


app.listen(PORT, () => console.log(`Server Run Successfully at ${PORT}`))
CreateDatabase();
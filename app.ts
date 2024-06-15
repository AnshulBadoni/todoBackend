import express from "express";
const cors = require("cors");
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import mainRoutes from './routes/getRoutes/mainRoutes';
import dynamicRoutes from './routes/postRoutes/dynamicRoutes';


dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

const uri = process.env.DB_STRING;
console.log(uri);
mongoose.connect(uri?uri:'', {autoIndex:true});


app.get("/", (res:any) => {
    res.send("Hello World!");
});

///////////////////all task////////////////////
app.use(mainRoutes);
/////////////////single task///////////////////
app.use(dynamicRoutes);

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
})


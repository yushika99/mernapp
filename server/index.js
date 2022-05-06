//4. get routers to index.js
const tasks = require("./routers.tasks");
const connection = require('./db'); // 2.create connection to mongo db
//1. set up express 
const cors = require("cors");
const express = require ('express');
const app = express();

connection() // create connection to mongo db

app.use(express.json);
app.use(cors());

//4.
app.use("/api/task",tasks);

const port = process.env.port ||8080;
app.listen(port,()=> console.log('Listening on port ${port}...'));
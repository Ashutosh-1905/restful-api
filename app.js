const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const connectedDB = require("./config/db");
require("dotenv").config();
connectedDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api", userRoutes);

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./db/dbConnect')
dbConnect(process.env.MONGO_URL);


app.get("/", (req, res) => {
    res.status(200).json({
        success: false,
        message: "we are on get page "
    })
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`serveur running in port ${PORT}`)
})
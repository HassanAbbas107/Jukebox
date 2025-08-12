const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
 
dotenv.config()
const TrackRoutes = require("./routes/TrackRoutes")

const app = express()


mongoose.connect(process.env.DB_URI)
mongoose.connection.on("connected",()=>{

    console.log("DB runs")
})

app.use(  logger('dev')  )
app.listen(3000, () => {
    console.log('app is list')
})
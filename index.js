require('dotenv/config') //required to import data from .env files
const express = require('express')
const app = express()
const cors = require('cors') 
const {mongoose} = require('./config/database')

const router = require('./config/routes') //all routes expect users are imported from here
const { usersRouter } = require('./api/controllers/userController') 

app.use(express.json())
app.use(cors())

app.use('/users',usersRouter)
app.use('/', router) //first the path hits '/' and then checks the paths in the routes file


app.listen(process.env.PORT ,() =>{
    console.log('Listening on port', process.env.PORT)
})

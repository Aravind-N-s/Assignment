const express = require('express')
const cors = require('cors')
const {mongoose} = require('./config/database')
const app = express()
const router = require('./config/routes')
const { usersRouter } = require('./api/controllers/userController') 

const path = require("path")
const port = process.env.PORT || 3005

app.use(express.json())
app.use(cors())

app.use('/', router)
app.use('/users',usersRouter)

app.listen(port ,() =>{
    console.log('Listening on port', port)
})

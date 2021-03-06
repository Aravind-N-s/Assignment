require('dotenv/config')
//db configuration
const mongoose = require('mongoose')

//this is set to 
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise

//connect to database string, value is set in .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log('ERROR connected to DB', err)
    })

module.exports = {
    mongoose
}
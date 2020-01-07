require('./models/recipe')
require('./models/restaurant')
require('./models/menu')

const mongoose = require('mongoose')

// REGISTER MODELS
const Recipe = mongoose.model('Recipe'),
    Restaurant = mongoose.model('Restaurant'),
    Menu = mongoose.model('Menu')

// MONGOOSE OPTIONS
const options = {
    useNewUrlParser: true,
    keepAlive: 1,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 3000,
}


// GET THE CONNECTION STRING
const DB_URI = process.env.DB_URI

// CONNECT
mongoose.connect(DB_URI, options, (err) => {
    if (!err) return console.log('Mongoose has connected to the database.')
})

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open')
})
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
})
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
})
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

async function example() {
    let restaurant = await Restaurant.findOne({})
    console.log(restaurant.Name)
    console.log(restaurant._id)

    let recipe = await Recipe.findOne({ 'CO2': { '$lt': 1000 } })
    console.log(recipe)

}

example()



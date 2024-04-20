module.exports = async Client => {
    
const Mongoose = require('mongoose')
Mongoose.connect(require('../config.json').MongooDB).then(() => {
    console.log('Database Connected')
}).catch(() => {
    console.log('Filed Connected')
})}
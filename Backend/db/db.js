const mongoose = require('mongoose');

function connect () {
    mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log('Error connecting to MongoDB', error.message);
    });
}

module.exports = connect;
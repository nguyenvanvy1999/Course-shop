const mongoose = require('mongoose'),
    mongoConfig = require('../constants/mongo');

async function connect() {
    try {
        await mongoose.connect(mongoConfig.host, mongoConfig.setting);
        console.log('Connect successfully to mongoDB');
    } catch (error) {
        console.log('Connect failed to mongoDB');
    }
}

module.exports = { connect };
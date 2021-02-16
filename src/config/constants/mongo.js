const mongoConfig = {
    host: 'mongodb://localhost:27017/Course',
    setting: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ignoreUndefined: true,
        useFindAndModify: false,
    },
};
module.exports = mongoConfig;
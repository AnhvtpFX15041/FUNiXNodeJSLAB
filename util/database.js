const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://phuonganh:funix2021@cluster0.n2j3y.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected');
        callback(client);
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;


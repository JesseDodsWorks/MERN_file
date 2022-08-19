const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    jokes: {
        type: String
    },
});
 
const Jokes = mongoose.model('jokes', JokesSchema);
 
module.exports = Jokes;

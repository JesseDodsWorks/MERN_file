const Jokes = require('../models/jokes.model.js');

/////////////////////// Find ALL /////////////////////////
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json( allJokes )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

/////////////////////// Find ALL /////////////////////////

/////////////////////// Find ONE /////////////////////////
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json( oneJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Find ONE /////////////////////////

/////////////////////// CREATE one /////////////////////////
module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => {
            res.json( newJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
        
/////////////////////// CREATE one /////////////////////////

/////////////////////// Update one /////////////////////////
module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json( updatedJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Update one /////////////////////////

/////////////////////// Delete one /////////////////////////
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json( result )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Delete one /////////////////////////
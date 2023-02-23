const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    goalScorers: {
        type: String,
        required: true
    }
});

const Game = mongoose.model('Game', gameSchema);


module.exports = Game;
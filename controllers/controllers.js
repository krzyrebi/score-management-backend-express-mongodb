const Game = require('../db/game')

class GameActions {
    async getAllGames(req, res) {
        let docs;
        try {
            docs = await Game.find({});
        } catch (error) {
            res.status(500).send(error);
        }
        res.status(200).send(docs);
    }

    async getGame(req, res) {
        try {
            const id = req.params.id;
            let foundGame = await Game.findOne({ _id: id });
            res.status(200).send(foundGame);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async addGame(req, res) {
        console.log(req.body)
        const game = req.body.game;
        const score = req.body.score;
        const goalScorers = req.body.goalScorers;

        let newGame;
        try {
            newGame = new Game({
                game: game,
                score: score,
                goalScorers: goalScorers
            })
            await newGame.save();
            res.status(201).send(newGame);
        } catch (error) {
            res.status(422).send(error);
        }
    }

    async updateGame(req, res) {
        try {
            const id = req.params.id;
            let foundGame = await Game.findOne({ _id: id });
            foundGame.game = req.body.game;
            foundGame.score = req.body.score;
            foundGame.goalScorers = req.body.goalScorers;
            await foundGame.save();
            res.status(201).send(foundGame);
        } catch (error) {
            res.status(422).send(error);
        }
    }

    async deleteGame(req, res) {
        try {
            const id = req.params.id;
            await Game.deleteOne({ _id: id });
            res.status(204).send();
        } catch (error) {
            res.status(422).send(error);
        }
    }
}

const actions = new GameActions();

module.exports = actions;
const db = require("../models");

// Defining methods for the bookController
module.exports = {
    findAll: function (req, res) {

        db.Book.find(req.query)
            .then((dbBook) => res.json(dbBook))
            .catch(err => res.status(500).json(err));
    },
    findById: function (req, res) {

        const { id } = req.params;

        db.Book.findById(id)
            .then((dbBook) => res.json(dbBook))
            .catch(err => res.status(500).json(err));
    },
    create: function (req, res) {

        db.Book.create(req.body)
            .then((dbBook) => res.json(dbBook))
            .catch(err => res.status(500).json(err));
    },
    update: function (req, res) {

        const { id } = req.params;
        db.Book.findOneAndUpdate({ id: id }, req.body)
            .then((dbBook) => res.json(dbBook))
            .catch(err => res.status(500).json(err));
    },
    remove: function (req, res) {

        const { id } = req.params;
        db.Book.findById(id)
            .then((dbBook) => dbBook.remove())
            .then((dbBook) => res.json(dbBook))
            .catch(err => res.status(500).json(err));
    }
};
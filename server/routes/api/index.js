const path = require("path"),
    router = require("express").Router(),
    booksRoutes = require("./books"),
    googleRoutes = require("./google");

// Books routes match /api/books
router.use("/books", booksRoutes);

// Google Routes match /api/books
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = router;
const
    router = require('express').Router(),
    apiRoutes = require('./apiRoutes'),
    path = require("path");



router.use('/api', apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = router
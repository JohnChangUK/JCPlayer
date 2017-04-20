var express = require('express');
var router = express.Router();
var superagent = require('superagent');

router.get('/', function(req, res, next) {

    var url = req.query.url;
    if (url == null) {
        res.json({
            confirmation: 'Fail',
            message: 'Missing Feed Url'
        });
    }

    superagent
    .get(url)
    .query(null)
    .end(function(err, response) {
        if (err) {
        res.json({
            confirmation: 'FAIL',
            message: err
        });

        return;
    }

    res.send(response.text);

    });
});

module.exports = router;
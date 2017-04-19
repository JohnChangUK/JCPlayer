var express = require('express');
var router = express.Router();
var superagent = require('superagent');

router.get('/:term', function(req, res, next) {

    var term = req.params.term;

    // request to iTunes search API
    var url = 'http://itunes.apple.com/search';

    superagent
    .get(url)
    .query({media:'podcast', term: term})
    .set('Accept', 'application/json')
    .end(function(err, response) {
        if (err) {
        res.json({
            confirmation: 'FAIL',
            message: err
        });

        return;
    }

    var data = JSON.parse(response.text);

        res.json({
            confirmation: 'success',
            response: data.results
        });
    });

});

module.exports = router;
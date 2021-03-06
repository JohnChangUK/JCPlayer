var express = require('express');
var router = express.Router();
var superagent = require('superagent');
var xml2js = require('xml2js');

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
    
    var xml = response.text;

    xml2js.parseString(xml, function(err, result) {
        var rss = result.rss;
        var channel = rss.channel;
        if (channel.length > 0)
            channel = channel[0];

        res.json({
            confirmation: 'success',
            podcast: channel
        });
    });

    });
});

module.exports = router;
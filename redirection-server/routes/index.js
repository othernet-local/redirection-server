var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	host = req.host.split('.othernet')[0]
	subs = host.split('.')
	domain = "http://quagga.club/"
	
	subs.forEach(function(d){
		domain += "?"+d
	})
	res.redirect(domain);


});
router.get('/:edit', function(req, res, next) {
	host = req.host.split('.othernet')[0]
	subs = host.split('.')
	domain = "http://quagga.club/"
	
	subs.forEach(function(d){
		domain += "?"+d
	})

	if (req.params.edit == "edit"){
		domain += "?edit"
	}

	res.redirect(domain);

});


module.exports = router;

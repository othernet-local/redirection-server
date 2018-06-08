var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	host = req.host.split('.othernet')[0]
	subs = host.split('.')
	domain = "http://206.189.180.30/"
	if (subs[0] == "home"){
		res.render('index', {title: 'express'});
	}else{
		subs.forEach(function(d){
			domain += "?"+d
		})
		res.redirect(domain);
	}
});
router.get('/:edit', function(req, res, next) {
	host = req.host.split('.othernet')[0]
	subs = host.split('.')
	domain = "http://206.189.180.30/"
	
	subs.forEach(function(d){
		domain += "?"+d
	})

	if (req.params.edit == "edit"){
		domain += "/edit"
	}

	res.redirect(domain);

});


module.exports = router;

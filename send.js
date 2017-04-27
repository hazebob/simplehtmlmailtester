var nodemailer = require('nodemailer');
var fs = require('fs');
var config = require('./config.json');

function send(html) {
	var mailContent = {
		from: config.from, // sender address
		to: config.to, // list of receivers
		subject: config.subject, // Subject line
		text:config.subject, // plaintext body
		html: html || '<div>nothing</div>' // html body
	};

	transporter.sendMail(mailContent, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('sended!');
	});
}

var smtp = 'smtps://' + config.email + ':' + config.password + '@' + config.smtp;
var transporter = nodemailer.createTransport(smtp);

var temPath = process.argv[2];
fs.readFile(temPath, 'utf8', function (err, html) {
	send(html);
});
console.log('send html file : ', temPath);

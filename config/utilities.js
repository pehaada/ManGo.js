

var createSalt = function () {
    return crypto.randomBytes(128).toString('base64');
}

var hashPwd = function (salt, pwd) {


    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}

var strGenerator = function (len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



var sendEMail = function (To,Subject, EmailBody) {

    var nodemailer = require("nodemailer");
// create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "",
            pass: ""
        }
    });

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: "", // sender address
        to: To, // list of receivers
        subject: Subject, // Subject line
        html: EmailBody
    }

// send mail with defined transport object.
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {

            console.log(error);
        } else {
            console.log("Message sent: " + response.message);

        }

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}



module.exports.strGenerator = strGenerator;
module.exports.sendEMail = sendEMail;
module.exports.hashPwd = hashPwd;
module.exports.createSalt = createSalt;

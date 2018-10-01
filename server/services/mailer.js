const nodemailer = require('nodemailer');

module.exports = (recipient, link ) => {
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'boatslibrary@gmail.com', // generated ethereal user
                pass: 'Lo1pzc11' // generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'haha@test.com', // sender address
            to: recipient, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: '', // plain text body
            html: `<b>Hello world?</b> <div>click </div><a href=${link}>HERE</a>` // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
          //  console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
           // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });


}
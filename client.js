var nodemailer = require('nodemailer'); 

module.exports = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'xyz@gmail.com',
    pass: 'xyz'
  }
});


var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'xyz@gmail.com',
    pass: 'xyz'
  }
});

var mailOptions = {
  from: 'demo@softweb.pe',
  to: 'pepe.valdivia.caballero@gmail.com, jovaldiv@ulima.edu.pe, jvaldivia@softweb.pe',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

async function enviar(){
  var response = '';
  try{
    response = await transporter.sendMail(mailOptions);
  }catch(err){
    response = err;
  }
  console.log(response);
}

enviar();

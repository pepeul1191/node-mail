var mail = require('./client'); 

var mailOptions = {
  from: 'demo@softweb.pe',
  to: 'pepe.valdivia.caballero@gmail.com', //, jovaldiv@ulima.edu.pe, jvaldivia@softweb.pe',
  subject: 'Sending Email using Node.js',
  html: '<h1>That was easy!</h1>'
};

async function enviar(){
  var response = '';
  try{
    response = await mail.sendMail(mailOptions);
  }catch(err){
    response = err;
  }
  console.log(response);
}

enviar();

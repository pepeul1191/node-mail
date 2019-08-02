var mail = require('./client'); 

var mailOptions = {
  from: 'demo@softweb.pe',
  to: 'pepe.valdivia.caballero@gmail.com, jovaldiv@ulima.edu.pe, jvaldivia@softweb.pe',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
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

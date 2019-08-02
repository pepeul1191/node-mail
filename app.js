const mail = require('./client'); 
const ejs = require('ejs');
const fs   = require('fs');

function makeMail(data){
  var template = fs.readFileSync('./templates/demo.ejs', 'utf-8');
  return ejs.render(template, data);
}

var mailOptions = {
  from: 'demo@softweb.pe',
  to: 'pepe.valdivia.caballero@gmail.com', //, jovaldiv@ulima.edu.pe, jvaldivia@softweb.pe',
  subject: 'Sending Email using Node.js',
  html: makeMail({
    name: 'Pepe',
    title: 'Hola mundo',
  })
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

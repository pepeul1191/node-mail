const mail = require('./client'); 
const ejs = require('ejs');


function template(data){
  var str = '<h1>That was easy! <%= name + " " + new Date() %></h1>';
  return ejs.render(str, data);
}

var mailOptions = {
  from: 'demo@softweb.pe',
  to: 'pepe.valdivia.caballero@gmail.com', //, jovaldiv@ulima.edu.pe, jvaldivia@softweb.pe',
  subject: 'Sending Email using Node.js',
  html: template({
    name: 'Pepe',
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

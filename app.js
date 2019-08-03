const ejs = require('ejs');
const fs   = require('fs');
const express = require('express');
const app = express();
const mail = require('./client'); 

app.get('/sails/wellcome', function (req, res) {
  // query
  var data = {
    name: 'sails',
    title: 'Hola mundo',
  };
  var template = fs.readFileSync('./templates/sails/demo.ejs', 'utf-8');
  var html = ejs.render(template, data)
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

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

// enviar();

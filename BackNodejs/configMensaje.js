const nodemailer = require('nodemailer');

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'startelp.daw@gmail.com', // Cambialo por tu email
 pass: 'startelp2020' // Cambialo por tu password
 }
 });


 const mailOptions = {
    from: `${formulario.nombre}  <${formulario.email}>`,
    to: 'startelp.daw@gmail.com', // Cambia esta parte por el destinatario
    subject: 'Nuevo formulario de contacto',
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };


transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}
const nodemailer = require("nodemailer");

function sendMail(req, res) {
  const {
    program,
    course,
    firstName,
    lastName,
    phone,
    email,
    city,
    school,
    stuClass,
  } = req.body;

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "py.shashwat@gmail.com",
      pass: "lvpacfzalzugiytb",
    },
  });

  let mailDetails = {
    from: "py.shashwat@gmail.com",
    to: "vnsshashwat@gmail.com",
    subject: "Test mail",
    text: `program = ${program},
    course = ${course},
    firstName = ${firstName},
    lastName = ${lastName},
    phone = ${phone},
    email = ${email},
    city = ${city},
    school = ${school},
    class = ${stuClass},`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      res.status(404).json({
        success: false,
        error: err,
      });
    } else {
      res.status(200).json({
        success: true,
      });
    }
  });
}

module.exports = { sendMail };

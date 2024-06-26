const nodemailer = require("nodemailer");

module.exports = async (req, res) => {

  const { name, email, msg } = req.body;
      if (!name || !email || !msg) {
        return res.status(500).send({
          success: false,
          message: "Please Provide All Fields",
        });
      }

const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    },
    secure: false,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

const mailData = {
    from: {
        name: `${name}`,
        address: `${email}`,
    },
    replyTo: email,
    to: process.env.RECEIVER,
    subject: `form message`,
    text: msg,
    html: `<div class="container" style="max-width: 600px; margin: 20px auto; background-color: #ECECEC; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <div class="header" style="text-align: center; padding-bottom: 20px;">
                <h1>Contact Us</h1>
            </div>
            <div class="content" style="padding: 20px 0; text-align: center;">
                <div class="details" style="margin-bottom: 20px; background-color:#ECECEC">
                    <h2><strong>Name:</strong>${name}</h2>
                    <h2><strong>Email:</strong> <a href="mailto:${email}">${email}</a></h2>
                    <p><strong>Message:</strong>${msg}</p>
                </div>
                <a href="mailto:${email}" class="button" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 4px; border: none; cursor: pointer; font-size: 16px;">Reply</a>
            </div>
        </div>`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

return res.status(200).send({
        success: true,
        message: "Message successfully sent!",
      });
};



// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");



// //transport
// const transporter = nodemailer.createTransport(
//  { 
//   service:"gmail",
//   host: "smtp.gmail.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASSWORD
//   },}
// );


// await new Promise((resolve, reject) => {
//   // verify connection configuration
//   transporter.verify(function (error, success) {
//       if (error) {
//           console.log(error);
//           reject(error);
//       } else {
//           console.log("Server is ready to take our messages");
//           resolve(success);
//       }
//   });
// });

// const sendEmailController = async(req, res) => {
//   try {
//     const { name, email, msg } = req.body;
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }
//     //email matter
//     await new Promise((resolve, reject) => {
//       // verify connection configuration
//       transporter.sendMail(
//         {
//           to: process.env.RECEIVER,
//           from: process.env.USER,
//           subject: "Regarding Mern Stack Job",
//           html: `
//           <div class="container" style="max-width: 600px; margin: 20px auto; background-color: #ECECEC; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
//         <div class="header" style="text-align: center; padding-bottom: 20px;">
//             <h1>Contact Us</h1>
//         </div>
//         <div class="content" style="padding: 20px 0; text-align: center;">
//             <div class="details" style="margin-bottom: 20px; background-color:#ECECEC">
//                 <h2><strong>Name:</strong>${name}</h2>
//                 <h2><strong>Email:</strong> <a href="mailto:${email}">${email}</a></h2>
//                 <p><strong>Message:</strong>${msg}</p>
//             </div>
//             <a href="mailto:${email}" class="button" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 4px; border: none; cursor: pointer; font-size: 16px;">Reply</a>
//         </div>
//     </div>
//           `,
//       }, (err, info) => {
//         if (err) {
//             console.error(err);
//             reject(err);
//         } else {
//             console.log(info);
//             resolve(info);
//         }
//     });
// });

//     return res.status(200).send({
//       success: true,
//       message: process.env.PASSWORD,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };

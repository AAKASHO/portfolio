const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");



//transport
const transporter = nodemailer.createTransport(
 { 
  service:"gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  },}
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    try{
      console.log("called");
      transporter.sendMail(
        {
          to: process.env.RECEIVER,
          from: process.env.USER,
          subject: "Regarding Mern Stack Job",
          html: `
          <div class="container" style="max-width: 600px; margin: 20px auto; background-color: #ECECEC; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
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
    </div>
          `,
      });
    }
    catch(error){
      console.log(error);
    }

    return res.status(200).send({
      success: true,
      message: process.env.PASSWORD,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sendEmailController } = require("./controllers/portfolioContoller");
const ServerlessHttp = require("serverless-http");


//dotenv configuartion
dotenv.config();

//rest object
const app = express();
const router = express.Router();

// const router=express.Router();

//midlewares
app.use(cors());
app.use(express.json());

//routes

//router object
app.use(router);
//routes
router.get('/',(req,res)=>{
    res.send("App is Running");
})

router.post("/api/v1/portfolio/sendEmail", sendEmailController);
// app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8080;

//listen

app.use('/.netlify/functions/api',router)
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT}${process.env.RECEIVER}`);
});

module.exports.handler=ServerlessHttp(app);

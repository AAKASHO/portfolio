const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");

//router object
const router = express.Router();

//routes
router.get('/',(req,res)=>{
    res.send("App is Running");
})

router.post("/sendEmail", sendEmailController);



// /export
module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('264037ATV7kXc15c6e2d35');
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())

app.post("/api/messages", (req, res) => {
  const otp = req.body.otp;
  sendOtp.send("7876877477", "PRIIND", otp, function(error, data) {
    if (error) {
      res.json({
        status: 403,
        message: "Error",
        data: error
      });
    }
    res.json({
        status: 200,
        message: 'success',
        data: data
    })
  });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);

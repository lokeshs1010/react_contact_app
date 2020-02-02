const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const SendOtp = require('sendotp');
const morgan = require("morgan");
const path = require('path');

const sendOtp = new SendOtp('264037ATV7kXc15c6e2d35');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')));

app.post("/api/messages", (req, res) => {
  const otp = req.body.otp;
  sendOtp.send("9810153260", "PRIIND", otp, function(error, data) {
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Express server is running on localhost:${PORT}`)
);

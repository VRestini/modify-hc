var express = require("express");
var router = express.Router();
var attemptController = require("../controllers/attemptController")
router.post("/add", function (req, res){
    attemptController.insertAttempt(req, res)
})
module.exports = router
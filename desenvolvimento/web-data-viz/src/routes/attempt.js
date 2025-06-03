var express = require("express");
var router = express.Router();
var attemptController = require("../controllers/attemptController")
router.post("/add", function (req, res){
    attemptController.insertAttempt(req, res)
})
router.post("/load", function(req, res){
    attemptController.loadAttemptByUser(req, res)
})
router.post("/load-id", function(req,res){
    attemptController.loadAttemptId(req,res)
})
module.exports = router
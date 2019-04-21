var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var TFBC = require("./FabricHelper")


// Request LC
router.post('/issueInvoice', function (req, res) {

TFBC.issueInvoice(req, res);

});

// Issue LC
router.post('/acceptInvoice', function (req, res) {

    TFBC.acceptInvoice(req, res);
    
});

// Accept LC
router.post('/payInvoice', function (req, res) {

    TFBC.payInvoice(req, res);
    
});

// Get LC
router.get('/getInvoice', function (req, res) {

    TFBC.getInvoice(req, res);
    
});

// Get LC history
router.get('/getInvoiceHistory', function (req, res) {

    TFBC.getInvoiceHistory(req, res);
    
});


module.exports = router;

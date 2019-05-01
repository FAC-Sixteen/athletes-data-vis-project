const express = require('express');

const home = require('./home');
const error = require('./error');

const app = express();

const router = express.Router();


// GET
router.get ('/', home.get);


router.get ('*', error.client);
router.use(error.server);


module.exports = router;
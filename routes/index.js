const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Welcome to DevSecOps Demo App!</h1>');
});

module.exports = router;

const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

module.exports = app;

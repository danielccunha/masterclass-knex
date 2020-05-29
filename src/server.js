require('dotenv/config');
const express = require('express');
const chalk = require('chalk');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  return console.log(`Server is running on port ${chalk.green(port)}`);
});

require('dotenv/config');
const express = require('express');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  return console.log(`Server is running on port ${chalk.green(port)}`);
});

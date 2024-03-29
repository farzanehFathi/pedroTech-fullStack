const express = require("express");
const app = express();
const db = require("./models");

db.sequelize.sync().then(() => {
  const port = 3001;
  app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
  });
});

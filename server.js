"use strict";

const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, `client`)));

mongoose.connect(
  process.env.MONGODB_URI ||
    `mmongodb://user21:MyPassword21@ds145295.mlab.com:45295/heroku_g1cxw7mf`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// routes
app.use(require(`./routes/api.js`));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

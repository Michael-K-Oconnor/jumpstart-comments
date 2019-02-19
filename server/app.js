const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

const db = require('../db/db.js');

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());

app.get(
  '/api/comments/:project_id',
  asyncMiddleware(async (req, res) => {
    const result = await db.getComments(req.params.project_id);
    res.json(result);
  })
);

app.post(
  '/api/comments',
  asyncMiddleware(async (req, res) => {
    await db.postComment(req.body);
    res.sendStatus(201);
  })
);

app.use((error, req, res, next) => {
  console.log(`Err with ${req.url}: \n`, error.message);
  res.sendStatus(500);
  next();
});

module.exports = app;

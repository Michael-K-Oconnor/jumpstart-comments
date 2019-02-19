const fs = require('fs');
const path = require('path');
const comments = require(path.join(__dirname, './commentData.json'));

exports.seed = function commentsSeeder(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(() => knex('comments').insert(comments));
};

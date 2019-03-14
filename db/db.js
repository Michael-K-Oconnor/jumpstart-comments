const db = require('./knex');

const getComments = projectId =>
  db('comments')
    .select()
    .where({ projectId });

const postComment = ({ projectId, userId, username, comment }) =>
  db('comments').insert({ projectId, userId, username, comment });

module.exports = {
  getComments,
  postComment
};

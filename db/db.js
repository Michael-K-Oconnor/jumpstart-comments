const db = require('./knex');

const getComments = project_id =>
  db('comments')
    .select()
    .where({ project_id });

const postComment = ({ project_id, user_id, username, comment }) =>
  db('comments').insert({ project_id, user_id, username, comment });

module.exports = {
  getComments,
  postComment
};

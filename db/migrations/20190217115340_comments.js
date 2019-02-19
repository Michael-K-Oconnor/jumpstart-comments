exports.up = function migrateUp(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', table => {
      table.increments('comment_id');
      table.integer('project_id');
      table.integer('user_id');
      table.string('username');
      table.string('comment');
      table.timestamps(false, true);
    })
  ]);
};

exports.down = function migrateDown(knex, Promise) {
  return Promise.all([knex.schema.dropTable('comments')]);
};

exports.up = function migrateUp(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', table => {
      table.increments('project_id');
      table.string('name');
      table.string('creator');
      table.string('creator_img');
      table.string('blurb');
      table.string('thumbnail');
      table.string('full_img');
      table.string('location');
      table.string('category');
      table.integer('goal');
      table.decimal('pledged', 12, 2);
      table.integer('backer_count');
      table.integer('days_left');
      table.timestamps(false, true);
    })
  ]);
};

exports.down = function migrateDown(knex, Promise) {
  return Promise.all([knex.schema.dropTable('projects')]);
};

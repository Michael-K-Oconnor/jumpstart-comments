const fs = require('fs');
const path = require('path');
const projects = require(path.join(__dirname, './projectData.json'));

exports.seed = function projectsSeeder(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(() => knex('projects').insert(projects));
};

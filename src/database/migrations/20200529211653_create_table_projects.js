const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async (knex) => {
  return knex.schema
    .createTable('projects', (table) => {
      table.increments('id');
      table.text('title').notNullable();
      table.timestamps(true, true);

      table
        .integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE');
    })
    .then(() => knex.raw(onUpdateTrigger('projects')));
};

exports.down = async (knex) => {
  return knex.schema.dropTable('projects');
};

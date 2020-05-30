exports.up = (knex) => {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id');
    table.text('title').notNullable();
    table.timestamps(true, true);

    table
      .integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('projects');
};


exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.bigInteger('entries').defaultTo(0);
        table.timestamp('joined').notNullable();

    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
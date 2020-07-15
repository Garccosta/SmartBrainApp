
exports.up = function(knex) {
    return knex.schema.createTable('login', function(table){
        table.increments('id').primary();
        table.string('hash').notNullable();
        table.string('email').unique().notNullable();
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('login');
};
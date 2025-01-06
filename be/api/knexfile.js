// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "user",
      password: "pass",
      database: "my_db",
    },
    migrations: {
      directory: "./migrations",
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

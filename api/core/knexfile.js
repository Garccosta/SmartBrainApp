// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      user: "user",
      password: "pass",
      database: "my_db",
    },
    migrations: {
      directory: "./migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "user",
      password: "pass",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "user",
      password: "pass",
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

# SmartBrainApp
To run this project locally:

1-Clone this repo

For the Backend you should do some other steps first:

2- Configure the database on the server.js file:

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : ''
    }
  });
  
3- Create a new database and add tables for users and login on PostgresSQL:
  
  Users:
  
  CREATE TABLE users (
	id serial PRIMARY KEY,
	name varchar(100),
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);

Login:

CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email text UNIQUE NOT NULL
);

4- For the FrontEnd you must add your own API key in the controllers/image.js file to connect to Clarifai API.
You can grab Clarifai API key here: https://www.clarifai.com/


Finally, run the steps below for each directory(frontend and backend):
-Run npm install
-Run npm start

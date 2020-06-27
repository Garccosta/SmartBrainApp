# SmartBrainApp

## To run this project locally:

### Clone this repo

For the Back-end you should do some other steps first:

### 1- Configure the database on the server.js file:
```
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : ''
    }
  });
 ```
  
### 2- Create a new database and add tables for users and login on PostgresSQL:
```  
 Users:
  
  CREATE TABLE users (
	id serial PRIMARY KEY,
	name varchar(100),
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);
```
```
Login:

CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email text UNIQUE NOT NULL
);
```
For the Front-End you must add your own API key in the controllers/image.js file to connect to Clarifai API.
You can grab Clarifai API key here: https://www.clarifai.com/


### Finally, run the steps below for each directory(front-end and back-end):
```
-Run npm install
-Run npm start
```

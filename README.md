# SmartBrainApp

\*Version 1.1 is out! New functionalities:

- Now with knex migrations so the database management will be much easier;
- Added multiple face detection.

Have fun ;)

## To run this project locally:

### Clone this repo

```
- Run npm i for each directory(front-end and back-end);
```

For the Back-end you should do some other steps first:

### 1- Configure the database connection on the knexfile.js file or leave the default one;

### 2- Run the DB instance using docker compose and run the migrations:

```
First run "docker compose up -d" for creating the docker instance of the postgres DB;
Finally run "npx knex migrate:latest" to run the migrations and so create the necessary tables on the DB;

Done! All the tables will be created.
```

You must add your own CLARIFAI_PAT key in the .env file on api/core project to connect to Clarifai API.

### You can grab Clarifai´s PAT key here:

https://www.clarifai.com/

### Finally, run the steps below for each directory(front-end and back-end):

```
-Run npm start
```

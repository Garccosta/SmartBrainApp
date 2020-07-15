# SmartBrainApp

*Version 1.1 is out! New functionalities:

- Now with knex migrations so the database management will be much easier;
- Added multiple face detection.

Have fun ;)

## To run this project locally:

### Clone this repo

For the Back-end you should do some other steps first:

### 1- Configure the database on the knexfile.js file:
```
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'smart_brain'
 ```
  
### 2- Create a new database and add tables for users and login on PostgresSQL:

```  
Just run: "npx knex migrate:latest"

Done! All the tables will be created.
```

For the Front-End you must add your own API key in the controllers/image.js file to connect to Clarifai API.

### You can grab Clarifai´s API key here: 
https://www.clarifai.com/


### Finally, run the steps below for each directory(front-end and back-end):
```
-Run npm install
-Run npm start
```

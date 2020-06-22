const express = require('express');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : ''
    }
  });


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => { res.send(db.users) });
app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcrypt) }); 
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) }); 
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) });  
app.put('/image', (req, res) => { image.handleImage(req, res, db) });  
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });  

app.listen(3333, () => {
    console.log("App is running on port 3333");
});
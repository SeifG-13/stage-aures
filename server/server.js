const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const app = express();
const PORT = process.env.PORT || 4000 ;

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/login', (req, res) => {});

app.listen(PORT,(req,res)=>{
    console.log('listening on port 4000..');
});
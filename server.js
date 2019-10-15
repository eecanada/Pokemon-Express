const express = require('express');
const app = express();

const Pokemon = require('./Models/pokemon.js');

const PORT = 3000;

app.get('/pokemon',(req,res)=>{
  res.send(Pokemon)
})



app.listen(PORT, () => {
    console.log("App is running on port:",
    PORT);
});
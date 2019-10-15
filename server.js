const express = require('express');
const app = express();

const Pokemon = require('./Models/pokemon.js');

const PORT = 3000;

// app.get('/pokemon',(req,res)=>{
//   res.send(Pokemon)
// })



app.get('/pokemon', (req,res)=>{
  res.render('index.ejs',{
    pokemon: Pokemon
  });
})


// app.get('/pokemon/yo', (req,res)=>{
//   res.send("Yooooooooo whatup")
// })

app.listen(PORT, () => {
    console.log("App is running on port:",
    PORT);
});
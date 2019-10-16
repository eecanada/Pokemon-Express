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

// url with/0
app.get('/pokemon/:index', (req,res)=>{
  res.render('show.ejs',{
    pokemon: Pokemon[req.params.index]
  });
})

// app.get('/pokemon/yo', (req,res)=>{
//   res.send("Yooooooooo whatup")
// })

app.listen(PORT, () => {
    console.log("App is running on port:",
    PORT);
});
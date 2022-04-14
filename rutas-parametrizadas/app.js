let serie = [
  { id: 1, name: "Friends" },
  { id: 2, name: "Breaking Bad" },
  { id: 3, name: "Dexter" },
  { id: 4, name: "Six Feet Under" },
];

const express = require("express");
const app = express();
app.get("/:id", function (req, res) {
  let serieBuscada = serie.filter(function (show) {
    if (show.id == req.params.id) return show;
  });
  res.send(serieBuscada[0])
  // res.send(req.params.id);
});

app.listen( process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

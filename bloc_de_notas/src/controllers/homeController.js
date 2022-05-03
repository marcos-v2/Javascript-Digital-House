const fs = require('fs');
const path = require('path');
const notas_path = path.join(__dirname,'../data/notas.json');
const file_data = fs.readFileSync(notas_path, 'utf-8');
const notas = JSON.parse(file_data);


const gethome = (req,res) => {


    res.render('home',{notas})
}


module.exports = {
    gethome
}
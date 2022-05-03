const fs = require('fs');
const path = require('path');

const notas_path = path.join(__dirname,'../data/notas.json');
const file_data = fs.readFileSync(notas_path, 'utf-8');
const notas = JSON.parse(file_data);

const getNota = (req,res) => {

    // const { id_nota } = req.params;
    const nota = req.params.id_nota;

    const nota_seleccionada = notas.find((el) => el.id === parseInt(nota))

    res.render('detalleNota',{nota:nota_seleccionada})
}


const borrarNota = (req,res) => {

    const id_nota = req.params.id_nota;

    const notas_filtradas = notas.filter(el => el.id !== parseInt(id_nota));

    const data = JSON.stringify(notas_filtradas,null,2);

    fs.writeFileSync(notas_path,data)

    res.redirect("/")
}

const register = (req,res) => {
    res.render("crearNota")
}

const postNota = (req,res) => {

    const titulo = req.body.titulo;
    const nota = req.body.nota;
    const date = Date.now();

    notas.push({
        titulo,
        nota,
        id: parseInt(date)
    })

    const notas_string = JSON.stringify(notas,null,2);
    fs.writeFileSync(notas_path,notas_string);

    res.redirect("/")
}

const editarNota = (req,res) => {

    const id = req.params.id_nota;

    const nota_seleccionada = notas.find((el) => el.id === parseInt(id))

    res.render('editarNotaFormulario',{nota: nota_seleccionada})
}

const putNota = (req,res) => {

    const id_nota = req.params.id_nota;
    const titulo = req.body.titulo;
    const nota = req.body.nota;

    notas.forEach(element => {
        if(element.id === parseInt(id_nota)){
            element.titulo = titulo;
            element.nota = nota;
        }
    });

    const data = JSON.stringify(notas,null,2);

    fs.writeFileSync(notas_path,data);


    res.redirect("/")
}


module.exports = {
    getNota,
    register,
    postNota,
    editarNota,
    putNota,
    borrarNota
}
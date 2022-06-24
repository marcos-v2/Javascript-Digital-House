window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    console.log("está bien importado mi archivo js");

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
const tituloForm=document.querySelector("#title");
tituloForm.focus();

formulario.addEventListener("submit",function(e){
    
let errors=[];
    e.preventDefault();
    
    let formTitle=document.querySelector("#title");
    let formRating=document.querySelector("#rating");
    let formAwards=document.querySelector("#awards");
    let formReleaseDate=document.querySelector("#release_date");
    let formLength=document.querySelector("#length");
    let formGenreId=document.querySelector("#genre_id");

    if(formTitle.value==""){errors.push("El campo no puede estar vacío")};
    if(formRating.value==""){errors.push("El campo no puede estar vacío")};
    if(formAwards.value==""){errors.push("El campo no puede estar vacío")};
    if(formReleaseDate.value==""){errors.push("El campo no puede estar vacío")};
    if(formLength.value==""){errors.push("El campo no puede estar vacío")};
    if(formGenreId.value==""){errors.push("El campo no puede estar vacío")};

    if (errors.length >0){console.log(errors)}

    // console.log(errors)

})

}
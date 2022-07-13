
function GenresInDb(){
  const genres = ["Acción","Aventura","Animación","Sci-Fi","Comedia","Documental","Drama","Fantasia","Infantiles","Musical"];
  return(
    genres.map((genre,index) => (<div className="col-lg-6 mb-4" key={index}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{genre}</div>
                    </div>
        </div>
    ))
  )}
export default GenresInDb
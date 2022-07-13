window.onload = () => {

    const titulo = document.querySelector('#title');
    const rating = document.querySelector('#rating');
    const awards = document.querySelector('#awards');
    const release_date = document.querySelector('#release_date');
    const movieLength = document.querySelector('#length');
    const formulario = document.querySelector('form');

    const api = 'http://localhost:3031/api/movies';
    const movieId = 3;

    fetch(`${api}/${movieId}`)
        .then((respuesta) => respuesta.json())
        .then((result) => {
            const data = result.data;
            console.log(data);
            const date = new Date(data.release_date);
      
            titulo.value = data.title;
            rating.value = data.rating;
            awards.value = data.awards;
            release_date.value = date.toISOString().slice(0, 10);
            movieLength.value = data.length;

        })
        .catch((e) => {
            console.error(e);
        })

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        const submitAction = e.submitter.id;
        const info = {
            title: titulo.value,
            rating: rating.value,
            awards: awards.value,
            release_date: release_date.value,
            length: movieLength.value
        }
        let options = {}

        switch (submitAction) {
            case 'botonEditar':
                options = {
                    method: 'PUT',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                }

                fetch(`${api}/update/${movieId}`,options)
                    .then(respuesta => respuesta.json())
                    .then(result => {
                        console.log(result)
                    })
                    .catch(e => {
                        console.error(e);
                    })
                

                break;
        
            case 'botonAgregar':
                options = {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                }

                fetch(`${api}/create`,options)
                    .then(respuesta => respuesta.json())
                    .then(result => {
                        console.log(result)
                    })
                    .catch(e => {
                        console.error(e);
                    })


                break;
            default:
                break;
        }

    })


}